import { useEffect, useState } from "react";
import "../css/navbar.css";
// import '../javascript/navbar.js'
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {


  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
    if (!active) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  };

  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 20 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <>
      <header className={`header ${stickyClass}`}>
        <div className="logo">H Cars</div>
        <nav className="navbar ">
          <ul className={active ? "navbar active" : " nav.navbar ul"}>
            <li>
              <a href="/" className="active">
                home
              </a>
            </li>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="#featuredcars">featured cars</a>
            </li>
            <li>
              <a href="#newcar">new cars</a>
            </li>
            <li>
              <a href="#brands">brands</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
        <div className="hamburger">
          <RxHamburgerMenu className="icon" onClick={showMenu} />
        </div>
      </header>
    </>
  );
};

export default NavBar;
