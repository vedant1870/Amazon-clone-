import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

function Header() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="navbar">
      <Link className="logo" to="/">AmazonClone</Link>

      <div className="nav-links">
        <Link to="/cart">Cart ({cart.length})</Link>
        {user ? (
          <span onClick={logout}>Logout ({user})</span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
