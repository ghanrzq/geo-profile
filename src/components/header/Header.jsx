import React from 'react'
import './Header.css'
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../../assets/1.jpg'
import IMG2 from '../../assets/2.jpg'
import IMG3 from '../../assets/3.jpg'
import IMG4 from '../../assets/4.mp4'
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG1}
          alt="First slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG2}
          alt="Second slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMG3}
          alt="Third slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <video autoPlay muted loop
          className="d-block w-100"
          src={IMG4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
      <div className="hero">
        <div>
        <h1 id="judulH1"> Profesional di Dunia Industri<br/> <b>Kontraktor dan MIGAS</b></h1>
				<p id="judulP">Take Your Business to The Next level</p>
        </div>
        <Button href='#about' id="btn__hero" variant="dark">Lihat Perusahaan</Button>
      </div>
    </div>
  )
}

// let judulH1 = document.getElementById('judulH1');
// let judulP = document.getElementById('judulP');
// let btn__hero = document.getElementById('btn__hero');

// window.addEventListener('scroll', function() {
//     let value = window.scrollY;
//     judulH1.marginRight = value * 4 + 'px';
//     judulP.marginLeft = value * 4 + 'px';
//     btn__hero.marginBottom = value * 1 + 'px';
// });

export default Header