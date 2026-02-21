import { Link } from "react-router";

const Navbar = () => {
  return (
        <>
    <nav>
      <ul>
      
        <li>
          <Link to="/Home">Home</Link>
        </li>
         <li>
          <Link to="/movie">Movie</Link>
         </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
    </>
    );
};

export default Navbar;