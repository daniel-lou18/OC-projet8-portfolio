type CardProps = {
  id: number;
  title: string;
  text: string;
};

function Card({ id, title, text }: CardProps) {
  return (
    <article>
      <div className="text-slate-500 pb-6 border-b-2 border-solid border-slate-300">
        {"0" + id}
      </div>
      <h4 className="text-3xl py-12">{title}</h4>
      <p className="text-lg">{text}</p>
    </article>
  );
}

export default Card;
