
import Navbar from "../navbar/Navbar";
import "./Style.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Art = () => {

  const [arts, SetArts] = useState([]);

  useEffect(() => {
    loadArts();
  }, []);
  const loadArts = async () => {
    const result = await axios.get("http://localhost:8080/fetch");
    SetArts(result.data);
  }

  return (
    <div className="sty-body1">
      <Navbar />
      <br></br>
      <center>
        <h2>Art Gallery</h2>
      </center>
      <div className="sty-cont">
        {
          arts && arts.map((art, index) => (
            <div className="item">
              <div className="img12">
                <img
                  className="img1"
                  src={art.imgsrc}
                  alt="loading"
                />
              </div>
              <p className="item-name i-font1">{art.title}</p>
              <p className="item-rate i-font1"><span className="rupees">₹ </span>{art.price}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Art;