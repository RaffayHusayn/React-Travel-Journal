import Card from "./Card";
import Locations from "../data/CardData";
import "../styles/CardHolder.css";
function CardHolder() {
  return (
    <div className="card-holder">
      {Locations.map((location) => (
        <Card {...location} />
      ))}
    </div>
  );
}
export default CardHolder;
