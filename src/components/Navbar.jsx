import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <h1 className="logo">Outfit Picker</h1>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/closet">Closet</NavLink>
          <NavLink to="/builder">Builder</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
