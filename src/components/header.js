import {  Link } from "react-router-dom";
function Header() {
  return (
    <nav className="container">
      <h1 className="logo">Logo</h1>
      <div className="menu_list">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="header_icons">
        <a>Cart</a>
        <a>Wishlist</a>
        <a>Account</a>
      </div>
      
    </nav>
  );
}

export default Header;
