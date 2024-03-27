import { FormEvent, useRef, useState } from "react";
import Reveal from "../ui/Reveal/Reveal";
import SubmitButton from "./SubmitButton";
import emailjs from "@emailjs/browser";
import MyLink from "../ui/MyLink";
import Button from "../ui/Button/Button";

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;
    try {
      setIsLoading(true);
      setError("");
      await emailjs.sendForm(
        "service_kprig4n",
        "contact_form",
        formRef.current,
        {
          publicKey: "tzDIze6xDQ5D-MFoV",
        },
      );
      console.log("Votre message a été envoyé!");
    } catch (err: unknown) {
      setError("Échec de l'envoi du message");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      className="grid min-h-screen w-full grid-cols-3 overflow-hidden px-[8%] pb-8 pt-48"
      ref={formRef}
      onSubmit={handleSubmit}
    >
      <Reveal>
        <div className="col-span-1 pr-8">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Me contacter
          </h2>
          <p className="mt-1 text-base leading-6 text-gray-600">
            N'hésitez pas à me contacter via ce formulaire, ou directement par
            mail !
          </p>
        </div>
        <div className="flex flex-col gap-8 pt-28 md:pt-16">
          <MyLink to="mailto:danielderudder@gmail.com">
            <Button>danielderudder@gmail.com</Button>
          </MyLink>
          <MyLink to="tel:+33658424650">
            <Button>+33 (0)6 58 42 46 50</Button>
          </MyLink>
        </div>
      </Reveal>
      <div className="col-span-2">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Reveal>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Prénom
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </Reveal>
            </div>

            <div className="sm:col-span-3">
              <Reveal>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nom
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </Reveal>
            </div>

            <div className="sm:col-span-3">
              <Reveal>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </Reveal>
            </div>

            <div className="sm:col-span-3">
              <Reveal>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Objet
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    autoComplete="subject"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </Reveal>
            </div>

            <div className="col-span-full">
              <Reveal>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <SubmitButton isLoading={isLoading} />
      </div>
    </form>
  );
}

export default ContactForm;
