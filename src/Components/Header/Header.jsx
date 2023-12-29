import { useState } from "react";
import "./HeaderStyle.css";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [clicked, setClicked] = useState(false);

  const toggleClick = () => {
    setClicked((prevClick) => !prevClick);
  };

  return (
    <div>
      <nav>
        <img src="img/logo.svg" alt="" className="logo" />
        <ul className={`mobile-ul ${clicked && "slide-in"}`}>
          <li>Home</li>
          <li>Products</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src="/img/search.png" alt="" className="search" />
        </div>

        {clicked ? (
          <IoCloseSharp className="open-close" onClick={toggleClick} />
        ) : (
          <FaBars className="open-close" onClick={toggleClick} />
        )}
      </nav>
    </div>
  );
}

export default Header;
