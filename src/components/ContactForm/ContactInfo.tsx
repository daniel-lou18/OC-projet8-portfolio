import Button from "../ui/Button/Button";
import Reveal from "../ui/Reveal/Reveal";

function ContactInfo() {
  return (
    <div className="col-span-1 pr-8">
      <Reveal>
        <h2 className="text-base font-semibold leading-7">Me contacter</h2>
        <p className="mt-1 text-base leading-6">
          N'hésitez pas à me contacter via ce formulaire, ou directement par
          mail !
        </p>
        <div className="flex flex-col gap-4 pb-8 pt-6 md:gap-8 md:pb-0 md:pt-12">
          <Button
            className="regular"
            type="anchor"
            href="mailto:danielderudder@gmail.com"
          >
            danielderudder@gmail.com
          </Button>
          <Button className="regular" type="anchor" href="tel:+33658424650">
            +33 (0)6 58 42 46 50
          </Button>
        </div>
      </Reveal>
    </div>
  );
}

export default ContactInfo;
