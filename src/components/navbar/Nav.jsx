import React, { useState } from 'react'
import './Nav.css'
import LOGO from '../../assets/logo.png'


const Nav = () => {
    const [toggle, setToggle] = useState(true)
  return (
    <nav onClick={() => setToggle(!toggle)}>
        <div className='logo'>
            <img src={LOGO} alt="logo" /> <h4>PT. Geo Recontruction Manufacturing</h4>
        </div>
        
        <ul className={toggle ? "slide" : ''}>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#progress">Progress</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        
        <div id="menu-toggle" className={toggle ? "active" : ''}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    
    
  )
}

window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    var navUl = this.document.querySelector("nav ul");
    nav.classList.toggle("putih", window.scrollY > 400);
    navUl.classList.toggle("putih", window.scrollY > 400);
})

export default Nav