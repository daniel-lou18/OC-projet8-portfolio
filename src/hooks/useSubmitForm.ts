import { FormEvent, RefObject, useState } from "react";
import emailjs from "@emailjs/browser";

export function useSubmitForm(formRef: RefObject<HTMLFormElement>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setIsLoading(true);
      setError("");
      setIsSuccess(false);
      await emailjs.sendForm(
        "service_kprig4n",
        "contact_form",
        formRef.current,
        {
          publicKey: "tzDIze6xDQ5D-MFoV",
        },
      );
      setIsSuccess(true);
    } catch (err: unknown) {
      setError("Échec de l'envoi du message");
    } finally {
      setIsLoading(false);
      formRef.current.reset();
    }
  }

  return { isLoading, error, isSuccess, handleFormSubmit };
}
