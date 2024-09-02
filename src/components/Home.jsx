import "./Home.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-cont">
        <Link to="/fruit">
          <div className="h-item">
            <img
              className="img1"
              src={require("../assests/homefruit.jpg")}
              alt="loading"
            />
            <p>Fruits</p>
          </div>
        </Link>
        <Link to="/vegetable">
          <div className="h-item">
            <img
              className="img1"
              src={require("../assests/homevegetable.jpg")}
              alt="loading"
            />
            <p>Vegetables</p>
          </div>
        </Link>
        <Link to="/beverages">
          <div className="h-item">
            <img
              className="img1"
              src={require("../assests/homebeverages.jpg")}
              alt="loading"
            />
            <p>Beverages</p>
          </div>
        </Link>
        <Link to="/icecream">
          <div className="h-item">
            <img
              className="img1"
              src={require("../assests/homeicecream.jpg")}
              alt="loading"
            />
            <p>Ice creams</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
