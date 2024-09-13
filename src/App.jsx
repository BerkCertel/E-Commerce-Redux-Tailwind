import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:id" element={<Detail />} />

      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
