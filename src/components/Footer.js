import { Link } from 'react-router-dom';
import React from 'react';
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
 return (
    <div className="footer">
      <div className="firstCol">
    <ul className="footerComp">
    <h3 className="paragName">Company</h3>
      <li className="listItems">
          <a href="/"> Home</a>
            </li>
      <li className="listItems">
           <a href="gallery"> Gallery</a>
           </li>
      <li className="listItems">
           <a href="contact"> Contact</a>
           </li>
      <li className="listItems">
            <a href="about"> About</a>
            </li>
    </ul>
</div>
<div className="secondCol">
      <ul className="footerContact">
         <h3 className="paragName">Contact Us</h3>
          <li className="listItems">Adress</li>
          <li className="listItems">Adress</li>
          <li className="listItems">Number</li>
      </ul>
      </div>
<div className="socialMedia">
        <Link to="https://www.instagram.com/">
      <InstagramIcon />
      </Link>
        <Link to="https://www.facebook.com/">
      <FacebookIcon />
      </Link>
        <Link to="https://twitter.com/?lang=en">
      <TwitterIcon />
      </Link>
    </div>
    </div>
  )
}


export default Footer;