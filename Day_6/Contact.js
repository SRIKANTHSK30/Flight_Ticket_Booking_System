import React from "react"
import "../Flight/Contact.css";

const Contact = () => {
  return (
    <>
    <div className="yo">
    <body className="con">
     <div class="container2">
    <div class="content2">
      <div class="left-side2">
        <div class="address details2">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">ADDRESS</div>
          <div class="text-one">30G,NANJAPPA STREET</div>
          <div class="text-two">COIMBATORE - 641008 </div>
        </div>
        <div class="phone details2">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">PHONE</div>
          <div class="text-one">1800 200 6668</div>
          <div class="text-two">1900 300 7779</div>
        </div>
        <div class="email details2">
          <i class="fas fa-envelope"></i>
          <div class="topic">EMAIL</div>
          <div class="text-one">winGo30@gmail.com</div>
          <div class="text-two">winGo3001@gmail.com</div>
        </div>
      </div>
      <div class="right-side2">
        <div class="topic-text">Send us a Message</div>
        <p>WinGo Booking PVT LTD </p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your Name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your Email"/>
        </div>
        <div class="input-box message-box">
        <input className="vino" type="text" placeholder="Message"/>
        </div>
        <div class="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </body>
  </div>
    </>
  );
}
export default Contact;