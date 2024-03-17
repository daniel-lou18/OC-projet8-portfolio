type CardProps = {
  id: number;
  title: string;
  text: string;
};

function Card({ id, title, text }: CardProps) {
  return (
    <article>
      <div>{id}</div>
      <h4>{title}</h4>
      <p>{text}</p>
    </article>
  );
}

export default Card;
