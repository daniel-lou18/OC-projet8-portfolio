import { useRef } from "react";
import SubmitButton from "./SubmitButton";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import ContactInfo from "./ContactInfo";
import FormFields from "./FormFields";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { isLoading, error, isSuccess, handleFormSubmit } =
    useSubmitForm(formRef);

  return (
    <form
      className="grid min-h-screen w-full grid-cols-1 overflow-hidden px-[8%] pb-16 pt-48 text-slate-950 md:grid-cols-3 md:pb-8"
      ref={formRef}
      onSubmit={handleFormSubmit}
    >
      <ContactInfo />
      <div className="col-span-1 md:col-span-2">
        <FormFields />
      </div>
      <div className="col-span-1 mb-24 md:col-span-3">
        <SubmitButton
          isLoading={isLoading}
          error={error}
          isSuccess={isSuccess}
        />
      </div>
      <p className="absolute bottom-4 text-gray-200">© 2024 Daniel Derudder</p>
    </form>
  );
}

export default ContactForm;
