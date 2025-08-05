import { FamuqueInput } from "@/components/FamuqueInput";
import { FamuqueTextArea } from "@/components/FamuqueTextArea";
import { FamuqueButton } from "../FamuqueButton";
import { Formik, Form, useFormikContext } from "formik";
import { ReactElement } from "react";
import { FormikHelpers } from "formik";

export type FormHelpers<T> = FormikHelpers<T>;


function FormLayout({ children, onSubmit, initialValues, validationSchema, className }: any): ReactElement {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={className}>{children}</Form>
    </Formik>
  );
}

function InputField({ name, placeholder = "", ...props }: any): ReactElement {
  const formik = useFormikContext<any>();
  const meta = formik.getFieldMeta(name);

  return (
    <FamuqueInput
      name={name}
      value={formik.values[name]}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      error={meta.touched && meta.error ? meta.error : ""}
      errorMessage={meta.error}
      placeholder={placeholder}
      {...props}
    />
  );
}

function TextAreaField({ name, placeholder = "", ...props }: any): ReactElement {
  const formik = useFormikContext<any>();
  const meta = formik.getFieldMeta(name);

  return (
    <FamuqueTextArea
      name={name}
      value={formik.values[name]}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      error={meta.touched && meta.error ? meta.error : ""}
      errorMessage={meta.error}
      placeholder={placeholder}
      {...props}
    />
  );
}

function SubmitButton({ children, ...props }: any): ReactElement {
  const { isValid, dirty, isSubmitting } = useFormikContext<any>();
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
});