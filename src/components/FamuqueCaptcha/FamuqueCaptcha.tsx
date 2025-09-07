import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormikContext } from "formik";

interface FamuqueCaptchaProps {
  name: string; // el campo donde guardar el token en formik
  siteKey: string;
}

export function FamuqueCaptcha({ name, siteKey }: FamuqueCaptchaProps) {
  const { setFieldValue } = useFormikContext<any>();
  const captchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (token: string | null) => {
    setFieldValue(name, token); // guarda el token en formik
  };

  return (
    <ReCAPTCHA
      ref={captchaRef}
      sitekey={siteKey}
      onChange={handleChange}
    />
  );
}
