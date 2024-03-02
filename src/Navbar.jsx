import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setActive] = useState(false);
  const [isOpened, setOpened] = useState(false);

  function toggleMenu() {
    setActive(!isActive);
    setOpened(!isOpened);
  }

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to='/'>MyBlog</Link>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/create'> Create Blog</Link>
        </li>
        <li>
          <Link to='/'>Contact</Link>
        </li>
      </ul>
      <button className='primary'>SignIn</button>
      <div
        className={isActive ? "menu_btn active" : "menu_btn"}
        onClick={toggleMenu}
      >
        <div>
          <span className='line-1'></span>
          <span className='line-2'></span>
          <span className='line-3'></span>
        </div>
      </div>

      <div className={isOpened ? "drop-down open" : "drop-down"}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/create'> Create Blog</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
          <li>
            <button className='primary'>SignIn</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
