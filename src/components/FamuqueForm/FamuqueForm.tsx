import { FamuqueInput } from "@/components/FamuqueInput";
import { FamuqueTextArea } from "@/components/FamuqueTextArea";
import { FamuqueButton } from "../FamuqueButton";
import { FormikValues, FormikProps , FormikProvider, Form, useFormikContext } from "formik";
import { ReactElement } from "react";
import { FamuqueCaptcha } from "@/components/FamuqueCaptcha";
import React from "react";

interface FormLayoutProps<T extends Record<string, any>> {
  children: React.ReactNode;
  formik: FormikProps<T>;
  className?: string;
}

type FieldProps<T extends Record<string, any>> = {
  name: keyof T & string;
  placeholder?: string;
  [key: string]: any;
};


function FormLayout<T extends FormikValues>({ 
  children, 
  formik, 
  className 
}: FormLayoutProps<T>): ReactElement {
  return (
    <FormikProvider value={formik}>
      <Form className={className}>{children}</Form>
    </FormikProvider>
  );
}

function InputField<T extends FormikValues>({ 
  name, 
  placeholder = "", 
  ...props 
}: FieldProps<T>): ReactElement {
  const formik = useFormikContext<T>();
  const meta = formik.getFieldMeta(name);
 
  return (
    <FamuqueInput
      name={name}
      value={formik.values[name] ?? ""}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      error={!!(meta.touched && meta.error)}
      errorMessage={meta.error}
      placeholder={placeholder}
      {...props}
    />
  );
}

function TextAreaField<T extends FormikValues>({ 
  name, 
  placeholder = "", 
  ...props 
}: FieldProps<T>): ReactElement {  
  const formik = useFormikContext<T>();
  const meta = formik.getFieldMeta(name);

  return (
    <FamuqueTextArea
      name={name}
      value={formik.values[name] ?? ""}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      error={!!(meta.touched && meta.error)}
      errorMessage={meta.error}
      placeholder={placeholder}
      {...props}
    />
  );
}

function SubmitButton({ 
  children, 
  ...props 
}: React.ComponentProps<'button'>): ReactElement {
  const { isValid, dirty, isSubmitting } = useFormikContext<FormikValues>();
  return (
    <FamuqueButton 
      type="submit"
      disabled={!isValid || !dirty}
      loading={isSubmitting}
      {...props}
    >
      {children}
    </FamuqueButton>
  );
}

export const FamuqueForm = Object.assign(FormLayout, {
  Input: InputField,
  TextArea: TextAreaField,
  Submit: SubmitButton,
  Captcha: FamuqueCaptcha,
});