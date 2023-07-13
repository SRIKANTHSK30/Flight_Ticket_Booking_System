import React from "react"
import "../Flight/Footer.css";
import {AiFillFacebook, AiOutlineTwitter,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai';


const Footer = () => {
  return (
    <>
   
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p>We’re on a mission to help people discover the real value of travel — to inspire, to give more reasons, to make it easy — for you to go. Our company was founded back in 2005, and since then, we’ve imagined and created some of the most well-loved products for travelers all around the world.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>COMPANY</h6>
            <ul class="footer-links">
              <li><a href="About WinGo">About WinGo</a></li>
              <li><a href="Security">Press</a></li>
              <li><a href="Careers">Careers</a></li>
              <li><a href="Contact Us">Contact Us</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>LEARN MORE</h6>
            <ul class="footer-links">
              <li><a href="About Us">WinGo</a></li>
              <li><a href="Contact Us">Terms</a></li>
              <li><a href="Contribute">Data Privacy Policy</a></li>
              <li><a href="Privacy Policy">Advertise</a></li>
              <li><a href="SiteMap">©2023 WinGo Pte Ltd. All Rights Reserved</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6>EXPLORE</h6>
            <ul class="footer-links">
              <li><a href="About Us">Airport Directory</a></li>
              <li><a href="Contact Us">AirLine Directory</a></li>
              <li><a href="Contribute">FLight Schedule</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by WinGo
         
            </p>
          </div>
        </div>
      </div>
</footer>
    </>
  );
}
export default Footer;