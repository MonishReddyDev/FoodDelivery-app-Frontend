import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Tomato is your trusted partner for fresh produce delivery. Bringing
            quality and taste to your doorstep since 2020.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.linkedin_icon} alt="linkedin" />
            <img src={assets.twitter_icon} alt="twitter" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+1 (555) 123-4567</li>
            <li>info@tomato.com</li>
            <li>
              <span>123 Tomato Lane, Veggie City, Country</span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="hr" />
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Tomato Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
