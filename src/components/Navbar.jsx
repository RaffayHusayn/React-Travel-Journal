import WorldIcon from "../images/worldwide.png";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <img src={WorldIcon} alt="websiter-icon" className="world-icon" />
      <p className="nav-text">My Travel Journal</p>
    </nav>
  );
}

export default Navbar;
