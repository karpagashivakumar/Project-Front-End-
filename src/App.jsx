import { Route, Routes } from "react-router-dom";
import "./App.css";
import Art from "./components/Art";
import Vegetable from "./components/Vegetable";
import Icecream from "./components/Icecream";
import Beverages from "./components/Beverages";
import Login from "./User/Login";
import Signup from "./User/Signup";
import Forgotpassword from "./User/Forgotpassword";
import Resetpassword from "./User/Resetpassword";
import Order from "./components/Order";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/order" element={<Order />} />
      <Route path="/forgotpassword" element={<Forgotpassword />} />
      <Route path="/resetpassword" element={<Resetpassword />} />
      <Route path="/" element={<Art />} />
      
      <Route path="/vegetable" element={<Vegetable />} />
      <Route path="/icecream" element={<Icecream />} />
      <Route path="/beverages" element={<Beverages />} />
    </Routes>
  );
};

export default App;
