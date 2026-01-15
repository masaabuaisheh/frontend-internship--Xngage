import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/svgs/logo.svg";

export default function Header() {
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <header>
      <div className="announcement-bar">
        <div className="container">
          <p>
            Cleaver-Brooks ClearFire&reg;-CS Condensing Boiler Named Most
            Valuable Product of the Year by Industry Professionals.
            <a href="#" onClick={handleClick} className="announcement-link">
              Learn More &rarr;
            </a>
          </p>
        </div>
      </div>
      <div className="secondary-list">
        <div role="navigation" className="container">
          <ul>
            <li>
              <a href="#" onClick={handleClick} className="find-rep">
                <i className="fa-solid fa-user"></i>
                Find a Rep
              </a>
            </li>
            <li>
              <a href="#" onClick={handleClick} className="parts-store">
                <i className="fa-solid fa-cart-shopping"></i>
                Parts Store
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <input type="checkbox" id="menu-toggle" hidden />
          <label htmlFor="menu-toggle" className="menu-button">
            <i className="fa-solid fa-bars"></i>
          </label>

          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="header logo" />
            </Link>
          </div>

          <nav className="main-menu">
            <div className="colse-menu">
              <label
                htmlFor="menu-toggle"
                className="close-button"
                id="close-button"
              >
                <i className="fa-solid fa-x"></i>
              </label>
            </div>

            <ul>
              <li>
                <a href="#" onClick={handleClick}>
                  solutions
                </a>
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  products
                </a>
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  rentals
                </a>
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  industries
                </a>
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  education & training
                </a>
              </li>
              <li>
                <a href="#" onClick={handleClick}>
                  company info
                </a>
              </li>
            </ul>

            <div className="secondary-list-for-mobile">
              <ul>
                <li>
                  <a href="#" onClick={handleClick} className="find-rep">
                    <i className="fa-solid fa-user"></i>
                    Find a Rep
                  </a>
                </li>
                <li>
                  <a href="#" onClick={handleClick} className="parts-store">
                    <i className="fa-solid fa-cart-shopping"></i>
                    Parts Store
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="search-button">
            <button type="button">Search</button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </header>
  );
}
