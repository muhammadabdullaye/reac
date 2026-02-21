import "./App.css";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Products from "./pages/products ";
import Shop from "./pages/Shop";
import Layout from './layouts/Layout'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Movie" element={<Movie />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          </Route>
      </Routes>
    </>
  );
}

export default App;