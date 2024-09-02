import Navbar from "../navbar/Navbar";
import "./Order.css";

const Order = () => {
  return (
    <>
      <div className="order-container">
        <Navbar />
        <div className="o-cont1">
          <div className="o-cont">
            <div className="o-cont11">
              <div>
                <label htmlFor="type f1">Fruits</label>
                <br></br>
                <br></br>
                <select>
                  <option>Apple</option>
                  <option>Mango</option>
                  <option>Pomegranate</option>
                  <option>Pineapple</option>
                  <option>Banana</option>
                  <option>Jackfruit</option>
                  <option>Strawberry</option>
                  <option>Guava</option>
                </select>
              </div>
              <div>
                <label htmlFor="qnt f1">Quantity(kg)</label>
                <br></br>
                <br></br>
                <input type="number" id="qnt"></input>
              </div>
            </div>
            <div className="o-cont11">
              <div>
                <label htmlFor="type f1">Vegetables</label>
                <br></br>
                <br></br>
                <select>
                  <option>Tomatoes</option>
                  <option>Onion</option>
                  <option>Lady's finger</option>
                  <option>Potato</option>
                  <option>Brinjal</option>
                  <option>Carrots</option>
                  <option>Beetroot</option>
                  <option>Bitter gourd</option>
                </select>
              </div>
              <div>
                <label htmlFor="qnt f1">Quantity(kg)</label>
                <br></br>
                <br></br>
                <input type="number" id="qnt"></input>
              </div>
            </div>
            <div className="o-cont12">
              <div className="o-cont123">
                <div className="rupees f1">Total ₹</div>
                <div>1000</div>
              </div>
            </div>
            <div className="o-cont13">
              <button onClick={() => alert("Order has been placed")}>
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;