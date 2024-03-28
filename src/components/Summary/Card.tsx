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
        <h4 className="py-12 text-3xl">{title}</h4>
      </Reveal>
      <Reveal>
        <p className="text-lg">{text}</p>
      </Reveal>
    </article>
  );
}

export default Card;
