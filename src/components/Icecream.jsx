import React from "react";
import Navbar from "../navbar/Navbar";

const Icecream = () => {
  return (
    <>
      <Navbar />
      <br></br>
      <center>
        <h2>Cool treat</h2>
        <h3>(Ice creams from Rs. 50.00 - 200.00)</h3>
      </center>
      <div className="sty-cont">
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/vannila.webp")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Vanilla</p>
          <p className="item-rate i-font1"><span className="rupees"></span></p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/Chocolate.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Chocolate</p>
          <p className="item-rate i-font1"><span className="rupees"></span></p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/strawberry.webp")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Strawberry</p>
          <p className="item-rate i-font1"><span className="rupees"></span></p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/Black Currant.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Black Currant</p>
          <p className="item-rate i-font1"><span className="rupees"></span></p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/Blueberry.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Blueberry</p>
          <p className="item-rate i-font1"><span className="rupees"></span></p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/butterscotch.webp")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Butterscotch</p>
          <p className="item-rate i-font1"><span className="rupees"></span></p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/oreo.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Oreo</p>
          <p className="item-rate i-font1"><span className="rupees"></span></p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/bubblegum.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Bubblegum</p>
          <p className="item-rate i-font1"><span className="rupees"></span></p>
        </div>
      </div>
    </>
  );
};

export default Icecream;
