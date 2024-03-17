import Card from "./Card";

const cardsData = [
  {
    id: 1,
    title: "Développement web",
    text: "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction.",
  },
  {
    id: 2,
    title: "Expérience professionnelle",
    text: "With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.",
  },
  {
    id: 3,
    title: "Objectif professionnel",
    text: "A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.",
  },
];

function Summary() {
  return (
    <section className="h-screen w-full pt-96 px-[8%]">
      <h2>A propos</h2>
      <div className="grid grid-cols-3 gap-16">
        {cardsData.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </section>
  );
}

export default Summary;
