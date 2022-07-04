import "./App.css";
import Card from "./components/Card";
import Locations from "./data/CardData";

function App() {
  return (
    <div className="App">
      {Locations.map((location) => (
        <Card {...location} />
      ))}
      <p> new project</p>
    </div>
  );
}

export default App;
