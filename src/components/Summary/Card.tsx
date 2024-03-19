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
        <div className="text-neutral-500 pb-6 border-b-2 border-solid border-neutral-300">
          {"0" + id}
        </div>
      </Reveal>
      <Reveal>
        <h4 className="text-3xl py-12">{title}</h4>
      </Reveal>
      <Reveal>
        <p className="text-lg">{text}</p>
      </Reveal>
    </article>
  );
}

export default Card;
