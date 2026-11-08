type Card = {
  title: string;
  text: string;
};

const CARDS: Card[] = [
  {
    title: "Speak",
    text: "Short conversations you can repeat out loud."
  },
  {
    title: "Words",
    text: "A small set of words to review when you have a minute."
  },
  {
    title: "Listen",
    text: "Hear a phrase, then try it in your own words."
  }
];

export function HomePanel() {
  return (
    <section>
      <p className="eyebrow">English with AI</p>
      <h1>Practice a little every day.</h1>
      <p className="lead">
        EasyEnglish runs on Next.js and works as an installable PWA. Lessons, conversation, and progress will live here.
      </p>
      <ul className="cards">
        {CARDS.map((card) => (
          <li key={card.title}>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PracticePanel() {
  return (
    <section>
      <p className="eyebrow">Practice</p>
      <h1>Your next session</h1>
      <p className="lead">Practice activities are not connected yet. This screen is part of the app shell.</p>
    </section>
  );
}

export function ProgressPanel() {
  return (
    <section>
      <p className="eyebrow">Progress</p>
      <h1>Keep the streak</h1>
      <p className="lead">Progress will show here once lessons start saving on this device.</p>
    </section>
  );
}
