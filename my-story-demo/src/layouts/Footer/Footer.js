import useModal from "../../hooks/useModal.js";
import Modal from "../../components/Modal/Modal.js";
import ContactUs from "../../components/ContactUs/ContactUs.js";

import "./Footer.css";

import Logo from "../../assets/svgs/logo-footer.svg";

export default function Footer() {
  const contactModal = useModal();

  function handleModal(event) {
    contactModal.show();
    event.preventDefault();
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <p>221 Law St Thomasville, Georgia 31792</p>
            <div className="footer-brand-links">
              <a href="" onClick={handleClick}>
                Find a Rep &rarr;
              </a>
              <a href="" onClick={handleClick}>
                Subscribe for Updates &rarr;
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-middle">
          <div className="footer-col">
            <input type="checkbox" id="company-info" hidden />

            <label htmlFor="company-info" className="footer-title">
              <h4>Company Info</h4>
              <span className="more-info">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </label>

            <ul className="company-nav">
              <li>
                <a href="" onClick={handleClick}>
                  About
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Community Outreach
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Careers
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Trade Shows
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  News
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-title">
              <h4>Solutions</h4>
              <span className="more-info">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
            <ul>
              <li>
                <a href="" onClick={handleClick}>
                  Boiler Exhaust
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Heat Recovery
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Lorem Ipsum
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Reduce Emissions
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Reduce Fuel Costs
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Rentals
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-title">
              <h4>Featured Products</h4>
              <span className="more-info">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
            <ul>
              <li>
                <a href="" onClick={handleClick}>
                  ClearFire®-CE
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Flextube
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Hawk 4000
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  ProFire SBR-30
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  ProFire XL
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Prometha
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footer-title">
              <h4>Connect With Us</h4>
              <span className="more-info">
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </div>
            <ul>
              <li>
                <a href="#" onClick={handleModal} className="openContactUs">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick} className="cc">
                  Locations & Hours
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  Events
                </a>
              </li>
            </ul>
            <ul className="social">
              <li>
                <a href="" onClick={handleClick}>
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  <i className="fa-brands fa-square-twitter"></i>
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  <i className="fa-brands fa-square-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
              </li>
              <li>
                <a href="" onClick={handleClick}>
                  <i className="fa-brands fa-square-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy;2020 All Rights Reserved.</p>
            <div>
              <a className="terms" href="" onClick={handleClick}>
                Terms & Conditions
              </a>
              <a className="privacy" href="" onClick={handleClick}>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      <Modal
        title="Contact Us Form"
        isOpen={contactModal.isOpen}
        close={contactModal.hide}
      >
        <ContactUs />
      </Modal>
    </>
  );
}
