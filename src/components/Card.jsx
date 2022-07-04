import "../styles/Card.css";
import locationPin from "../images/location-pin.png";
const newyork =
  "https://www.travelandleisure.com/thmb/gPCyzXAnVMK116tKpy03OWXtEZI=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg";
function Card({ country, title, desc, dates }) {
  return (
    <div className="card">
      <img className="card-image" src={newyork} alt="newyork" />
      <div className="card-info">
        <div className="location">
          <img src={locationPin} alt="location" className="location-pin" />
          <p className="location-country">{country}</p>
          <p className="location-link">View on Google Map</p>
        </div>
        <h1 className="card-title">{title}</h1>
        <p className="card-date">{dates}</p>
        <p className="card-desc">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
