import React from "react";
import Navbar from "../navbar/Navbar";

const Cooldrinks = () => {
  return (
    <>
      <Navbar />
      <br></br>
      <center>
        <h2>Beverages</h2>
      </center>
      <div className="sty-cont">
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/redbull.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Red Bull</p>
          <p className="item-rate i-font1">
            <span className="rupees">₹ </span>90
          </p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/monster.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Monster</p>
          <p className="item-rate i-font1">
            <span className="rupees">₹ </span>110
          </p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/sprite.jpeg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Sprite</p>
          <p className="item-rate i-font1">
            <span className="rupees">₹ </span>40
          </p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/d6.png")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Fanta</p>
          <p className="item-rate i-font1">
            <span className="rupees">₹ </span>40
          </p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/d8.png")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Coco cola</p>
          <p className="item-rate i-font1">
            <span className="rupees">₹ </span>45
          </p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/fruit juice.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Fresh Juice</p>
          <p className="item-rate i-font1">
            <span className="rupees">₹ </span>40 - 180
          </p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/milkshakes.jpg")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Milkshakes</p>
          <p className="item-rate i-font1">
            <span className="rupees">₹ </span>60 - 180
          </p>
        </div>
        <div className="item">
          <div>
            <img
              className="img1"
              src={require("../assests/mountain dew.webp")}
              alt="loading"
            />
          </div>
          <p className="item-name i-font1">Mountain Dew</p>
          <p className="item-rate i-font1">
            <span className="rupees">₹ </span>60
          </p>
        </div>
      </div>
    </>
  );
};

export default Cooldrinks;
