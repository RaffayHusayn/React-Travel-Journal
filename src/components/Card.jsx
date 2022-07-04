import "../styles/Card.css";
import locationPin from "../images/location-pin.png";
const newyork =
  "https://www.travelandleisure.com/thmb/gPCyzXAnVMK116tKpy03OWXtEZI=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={newyork} alt="newyork" />
      <div className="card-info">
        <div className="location">
          <img src={locationPin} alt="location" className="location-pin" />
          <p className="location-country">IRAN</p>
          <p className="location-link">View on Google Map</p>
        </div>
        <h1 className="card-title">Card heading</h1>
        <p className="card-date">05 Dec, 2016 - 15 Oct, 2017</p>
        <p className="card-desc">
          card ddescription p pedescriptioi afjadk disafd dsfa adfk dafjil
          dfasfndesc rip tionde scrip tiondesc riptionde script iondescr
          iptionscription asfka sadkfjla afdklasdjflka afsdkjk dfkj kdf
          kafjlasdjflas asdfkasjfkasdjfkalf asl fl klajsfklajds l klj fklajdfk k
          k flakdsjfklasdj lfkjasd
        </p>
      </div>
    </div>
  );
}

export default Card;
