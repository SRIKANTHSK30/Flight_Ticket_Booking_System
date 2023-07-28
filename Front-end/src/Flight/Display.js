import React from "react";
import "../Flight/Display.css";
import logo from "../Flight/images4.png";
import logo1 from "../Flight/images2.png";
import logo2 from "../Flight/images1.png";
import logo3 from "../Flight/images3.png";
const Contents = () =>{
    return(
            <div className="inner-wrap">
        <section className="zig-zag">
                <div className="mfflop">
                    <span className="zig-zag"></span>
                    <div className="divbox">
                        <div className="divimg">
                            <img src={logo} height={280} width={300} ></img>
                        </div>
                        <div className="divttl">Easy Booking</div>
                        <div className="divpara">We offer easy and convenient flight bookings with attractive offers.</div>
                    </div>
                    <div className="divbox">
                        <div className="divimg">
                            <img src={logo1}  height={280} width={300}></img>
                        </div>
                        <div className="divttl">Lowest Price</div>
                        <div className="divpara">"We ensure low rates on hotel reservation, holiday packages and on flight tickets."</div>
                    </div>
                    <div className="divbox">
                        <div className="divimg">
                            <img src={logo2}  height={280} width={300}></img>
                        </div>
                        <div className="divttl">Exciting Deals</div>
                        <div className="divpara">Enjoy exciting eals on flights, hotels, buses, car rental and tour packages.</div>
                    </div>
                    <div className="divbox">
                        <div className="divimg">
                            <img src={logo3}  height={280} width={300}></img>
                        </div>
                        <div className="divttl">24/7 Support</div>
                        <div className="divpara">
                            "Get assistance 24/7 on any kind of travel related query.  We are happy to assist you."
                        </div>
                    </div>
                </div>
        </section>
            </div>
    )
}
export default Contents;