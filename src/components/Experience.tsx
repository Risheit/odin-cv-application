import { useState } from "react";
import "../styles/Components.css";
import InfoCard from "./InfoCard";

export default function Experience() {
  const [cards, setCards] = useState([]);

  const addCard = (
    institution: string,
    period: string,
    degree: string,
    awards: string[]
  ) => (
    <InfoCard
      header={institution}
      period={period}
      subtitle={degree}
      listName="Awards"
      list={awards}
    />
  );

  return (
    <section className="Component" id="Experience">
      <h1>Experience</h1>
      <div className="Cards">{cards}</div>
    </section>
  );
}
