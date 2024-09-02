import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav1">
      <div className="shop-name">Groceteria</div>
      <div className="nav">
        <Link className="nav11" to="/">
          Home
        </Link>
        <Link className="nav11" to="/fruit">
          Fruits
        </Link>
        <Link className="nav11" to="/vegetable">
          Vegetables
        </Link>
        <Link className="nav11" to="/beverages">
          Beverages
        </Link>
        <Link className="nav11" to="/icecream">
          Cool treat
        </Link>
        <Link className="nav11" to="/order">
          Order
        </Link>
        <Link className="nav11" to="/signup">
          Sign up
        </Link>
        <Link className="nav11" to="/login">
          login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
