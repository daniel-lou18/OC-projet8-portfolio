import Reveal from "../ui/Reveal/Reveal";

function FormFields() {
  return (
    <Reveal>
      <div className="border-b border-gray-900/10 pb-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-start-1 col-end-7 md:col-start-2 lg:col-span-3">
            <label htmlFor="first-name" className="block font-medium leading-6">
              Prénom
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="col-start-1 col-end-7 md:col-start-2 lg:col-span-3">
            <label htmlFor="last-name" className="block font-medium leading-6">
              Nom
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="col-start-1 col-end-7 md:col-start-2 lg:col-span-3">
            <label htmlFor="email" className="block font-medium leading-6">
              Email
            </label>
            <div className="mt-2">
              <input
                required
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="col-start-1 col-end-7 md:col-start-2 lg:col-span-3">
            <label htmlFor="subject" className="block font-medium leading-6">
              Objet
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="subject"
                id="subject"
                autoComplete="subject"
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="col-start-1 col-end-7 md:col-start-2 lg:col-span-full">
            <label htmlFor="message" className="block font-medium leading-6">
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default FormFields;
