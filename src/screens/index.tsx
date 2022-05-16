import "../App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import ProductDetail from "./productDetail";
import CreateProduct from "./createProduct";

function Screens() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
}

export default Screens;
