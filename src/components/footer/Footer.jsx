import React from 'react'
import './Footer.css'
import LOGO from '../../assets/logo.png'
import {BsInstagram} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id='contact'>
      <a href="#" className='footer__logo'>
        <img src={LOGO}/>
        <h4>PT. Geo Recontruction Manufacturing</h4>
      </a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#progress">Progress</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://instagram.com/ghanirzqa_"><BsInstagram/>ghanirzqa_</a>
        <a href="https://t.me/ghanirzqa"><FaTelegramPlane/>ghanirzqa</a>
        <a href="mailto:aganrmp@gmail.com" target="_blank"><AiOutlineMail/>aganrmp@gmail.com</a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; PT. Geo Recontruction Manifacturing. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer