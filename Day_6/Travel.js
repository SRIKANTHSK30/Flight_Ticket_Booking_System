import React from "react";
import "../Flight/Travel.css"
import logo from "../Flight/flight.png"
export default function Travel(){
  return (
   <>
   <div className="airline">
    <h2 className="first">Popular Airlines</h2>
    </div>
    <p className="second">Book cheap flights on your favorite airlines</p>

    <div className="fli1">
    <img src={logo} height={200} width={1000}/>
    </div>
   </>
  );
}