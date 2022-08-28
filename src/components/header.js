import React from 'react';
function Header(){
    return (
        <header>
            <div className='navbar'>
            <a href="#home">Home</a>
            <div className="dropdown">
            <button className="dropbtn">Products
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <a href="#">DripShow Store Finder</a>
                <a href="#">DripShow Delivery</a>
                <a href="#">Digital Marketing</a>
            </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Company
                    <i className="fa fa-caret-down"></i>
                </button>
            <div className="dropdown-content">
                <a href="#">Careers</a>
                <a href="#">About us</a>
                <a href="#">Contact us</a>
            </div>
            </div>
                <a href="#home">Pricing</a>
                <a href="login.html">Log in</a>
            <button type="button"> <a href="#">Start free trial</a></button>
            </div>
        
        </header>
            );
    }

export default Header;
