import React from 'react';
import Faq from "react-faq-component";
import './Faq.css';
import { useState } from 'react';

const data = {
    title: "FAQ (Frequently Asked Questions)",
    rows: [
        {
            title: "I didn't recieve my booking confirmation mail",
            content: `You can use the search box in your inbox with keywords such as “flight” or “hotel”, “booking confirmation” and it would be a good idea to search by the airline name or hotel name. `,
        },
        {
            title: "My Booking has been cancelled",
            content:
            'When an airline decides to cancel the flight or route as it can’t operate the flight for a certain reason or it wants to use the aircraft to go somewhere else they deemed more important.!',
        },
        {
            title: "How do I get a refund on a ticket booking through WinGo?",
            content: `For refund of a confirmed booking, you need to place a cancellation request from the My Bookings section of the WinGo app.
            For refund related to a failed booking, the amount deducted from your account will be reversed in the source account within 7 days.`,
        },
        {
            title: "How can I track refunds on WinGo?",
            content: <ul >
                <li style={{color:'black'}}>Please follow the steps mentioned below to track your refund status:</li>
                <li style={{color:'black'}}> Log in to your WinGo account</li>
                <li style={{color:'black'}}> Click on the customer service tab</li>
                <li style={{color:'black'}}> Select your trip from the 'MyBookings' section</li>
                <li style={{color:'black'}}>Click on the booking ID and check the refund status</li>
            </ul>,
        },
        {
            title:"How do I cancel my ticket on WinGo?",
            content:<ul><li style={{color:'black'}}>Please follow these simple steps to cancel your ticket on WinGo:</li>
                <li style={{color:'black'}}>Log in to WinGo</li>
            <li style={{color:'black'}}> Visit the 'My Bookings' section on the app</li>
            <li style={{color:'black'}}> Select the desired booking, scroll down and click on the 'cancel ticket' tab to initiate cancellation.</li>
            <li style={{color:'black'}}> In case of partial cancellation, please select the desired passenger(s) and click on the cancel tab.</li>
            </ul>,
        },
    ],
};
const styles = {
    bgColor: '#b3f0ff ',
    opacity:0.2,
    titleTextColor: "black",
    titleTextSize: '20px',
    rowTitleColor: 'black',
    rowContentColor: 'black',
    transitionDuration: "1s",
    
};

const config = {
    animate: true,
    tabFocus: true,
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
};
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 950) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };
function CustomerService() {
    
    return ( 
        <>
        {/* <Top/> */}
        <div className='body'>
        <div className='cpad'>
        <h3>Book your Flight ticket with WinGo for a Memorable Experience</h3>
        <br></br>
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
        </div>
        </div>
        </>
     );
}

export default CustomerService;