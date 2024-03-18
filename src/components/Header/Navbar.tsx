import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex justify-end gap-12">
        <li className="relative">
          <Link to="/">Page d'accueil</Link>
        </li>
        <li className="relative">
          <Link to="/">A propos</Link>
        </li>
        <li className="relative">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
