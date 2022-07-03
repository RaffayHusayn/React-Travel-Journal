import "../styles/Card.css";
const newyork =
  "https://www.travelandleisure.com/thmb/gPCyzXAnVMK116tKpy03OWXtEZI=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={newyork} alt="newyork" />
      <h1 className="card-title">Card heading</h1>
      <p className="card-desc">card description</p>
    </div>
  );
}

export default Card;
