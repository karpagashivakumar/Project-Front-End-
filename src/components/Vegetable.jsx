import React from "react";
import Navbar from "../navbar/Navbar";

const Vegetable = () => {
  return (
    <div className="sty-body1">
      <Navbar />
      <br></br>
      <center>
        <h2>Vegetable</h2>
      </center>
      <div className="sty-cont">
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/tomatoes.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Tomato</p>
          <p className="item-rate i-font1"><span className="rupees">₹ </span>220</p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/ladyfinger.webp")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Lady's finger</p>
          <p className="item-rate i-font1"><span className="rupees">₹ </span>220</p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/onion.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Onion</p>
          <p className="item-rate i-font1"><span className="rupees">₹ </span>220</p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/potatoes.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Potato</p>
          <p className="item-rate i-font1"><span className="rupees">₹ </span>220</p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/carrots.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Carrots</p>
          <p className="item-rate i-font1"><span className="rupees">₹ </span>220</p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/beetroot.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Beetroot</p>
          <p className="item-rate i-font1"><span className="rupees">₹ </span>220</p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNeTyf_DSNRvni22bKIc5X0zQr_TETDxq5w&usqp=CAU"
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Bitter gourd</p>
          <p className="item-rate i-font1"><span className="rupees">₹ </span>220</p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6hPlvUHj3N0wwKXq0L9rQGo_L9Xp_Sk7USg&usqp=CAU"
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Brinjal</p>
          <p className="item-rate i-font1"><span className="rupees">₹ </span>220</p>
        </div>
      </div>
    </div>
  );
};

export default Vegetable;
