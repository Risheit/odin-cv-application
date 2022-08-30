import "../styles/Components.css";
import uniqid from "uniqid";

type Props = {
  header: string;
  period: string;
  subtitle?: string;
  listName: string;
  list: string[];
};

export default function InfoCard(props: Props) {
  return (
    <section className="Card">
      <h1 className="Title">
        {props.header}
        <span className="Period">{props.period}</span>
      </h1>
      {props.subtitle ? <h2>{props.subtitle}</h2> : null}
      <h3 className="List">{props.listName}</h3>
      <ul>
        {props.list.map((value) => (
          <li key={uniqid()}>{value}</li>
        ))}
      </ul>
    </section>
  );
}
