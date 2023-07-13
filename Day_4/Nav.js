import { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from './logotrans1.png';
import Main from './Home';
import Footer from './Footer';


class Navbar extends Component{
    state={clicked: false}
    handleClick = ()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){

    return(
        <>
            <nav>
            <img src={logo} width={200} height={70}/>
                <div>
                    <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>       
                        <li><a className="active"
                            href="/main">HOME</a></li>
                        <li><a href="index.html">MY BOOKINGS</a></li>
                        <li><Link to="/faq">F.A.Q</Link></li>
                        <li><Link to="/login">LOGIN/SIGNUP</Link></li>
                    </ul>
                </div>
                <div id='mobile' onClick={this.handleClick}>
                    <i if="bar"
                     className={this.state.clicked ?
                    'fas fa-times' : 
                    'fas fa-bars'} ></i>
                </div>
            </nav>
            <Main/>
            <Footer/>
        </>
    )
}
}
export default Navbar;