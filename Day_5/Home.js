import React from "react"
import "../Flight/Home.css";
import logo from "../Flight/ticket.mp4"

const Main = () => {
  return (
    <>
<div class="container">
        <div class="card custom-bg w-20 p-5 d-flex">
            <div class="row">
                <div class="pb-3 h3 text-left">Search Your Flight </div>
            </div>
            <form id="flight-form" onsubmit="return validateForm()">
                <div class="row">
                    <div class="form-group col-md align-items-start flex-column">
                        <label for="origin" class="d-inline-flex">FROM</label>
                        <input type="text" placeholder="City or Airport" class="form-control" id="origin" name="origin"
                            required/>
                    </div>
                    <div class="form-group col-md align-items-start flex-column">
                        <label for="depart" class="d-inline-flex">TO</label>
                        <input type="text" placeholder="City or Airport" class="form-control" id="depart" name="depart"
                            required/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md align-items-start flex-column">
                        <label for="departure-date" class=" d-inline-flex">DEPART</label>
                        <input type="date" class="form-control" id="departure-date" name="departure-date"
                            onkeydown="return false" required/>
                    </div>
                    <div class="form-group col-md align-items-start flex-column">
                        <label for="departure-date" class=" d-inline-flex">RETURN</label>
                        <input type="date" class="form-control" id="departure-date" name="departure-date"
                            onkeydown="return false"/>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-lg-3 align-items-start flex-column">
                        <label for="adults" class="d-inline-flex col-auto">ADULTS <span class="sublabel"> 12+
                            </span></label>
                        <select class="form-select" id="adults"
                            onchange="javascript: dynamicDropDown(this.options[this.selectedIndex].value);">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-3 align-items-start flex-column">
                        <label for="children" class="d-inline-flex col-auto">CHILDREN<span class="sublabel"> 2-11
                            </span></label>
                        <select class="form-select" id="children">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-3 align-items-start flex-column">
                        <label for="infants" class="d-inline-flex col-auto">INFANTS <span class="sublabel"> less than
                                2</span></label>
                        <select class="form-select" id="infants">
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-lg-6 align-items-start flex-column">
                        <label for="cabin" class="d-inline-flex">CABIN</label>
                        <select class="form-select" id="cabin">
                            <option value="ECONOMY">Economy</option>
                            <option value="PREMIUM_ECONOMY">Premium Economy</option>
                            <option value="BUSINESS">Business</option>
                            <option value="FIRST">First</option>
                        </select>
                    </div>
                    <div class="form-group col-lg-6 align-items-start flex-column pt-lg-4">
                        <div class="form-check form-switch">
                            <input class="form-check-input align-self-center" type="checkbox" id="directFlights"/>
                            <label class="form-check-label d-inline-flex align-self-center" for="directFlights">Direct
                                flights</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="text-left col-auto">
                        <button type="submit" class="btn btn-primary">Search flights</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</>
  );
}
export default Main;