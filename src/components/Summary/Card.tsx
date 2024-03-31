import Reveal from "../ui/Reveal/Reveal";

type CardProps = {
  id: number;
  title: string;
  text: string;
};

function Card({ id, title, text }: CardProps) {
  return (
    <article>
      <Reveal>
        <div className="border-b-2 border-solid border-neutral-300 pb-6 text-neutral-500">
          {"0" + id}
        </div>
      </Reveal>
      <Reveal>
        <h4 className="pb-8 pt-12 text-3xl">{title}</h4>
      </Reveal>
      <Reveal>
        {id !== 2 && <p className="text-base">{text}</p>}
        {id === 2 && (
          <p className="text-base">
            {text.slice(0, text.indexOf("ancien site professionnel"))}
            <a
              target="_blank"
              href="https://www.derudder-traduction.fr"
              className="text-base hover:underline"
              aria-label="website Derudder Traduction"
            >
              ancien site professionnel
            </a>
            {text.slice(text.indexOf(" témoigne"))}
          </p>
        )}
      </Reveal>
    </article>
  );
}

export default Card;
