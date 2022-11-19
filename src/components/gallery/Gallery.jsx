import React, {useEffect} from 'react'
import './Gallery.css'
import Button from 'react-bootstrap/Button';
import FP1 from '../../assets/1.jpg'
import FP2 from '../../assets/2.jpg'
import FP3 from '../../assets/3.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    image: FP1,
    name: 'Apartemen Parahyangan',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut incidunt deserunt nobis nesciunt neque placeat tenetur reprehenderit est repellat exercitationem saepe voluptate, odit consequuntur dolore nisi ipsa facere officiis. Itaque.'
  },
  {
    image: FP2,
    name: 'Mall Parahyangan',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut incidunt deserunt nobis nesciunt neque placeat tenetur reprehenderit est repellat exercitationem saepe voluptate, odit consequuntur dolore nisi ipsa facere officiis. Itaque.'
  },
  {
    image: FP3,
    name: 'Tambang Batu Bara',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut incidunt deserunt nobis nesciunt neque placeat tenetur reprehenderit est repellat exercitationem saepe voluptate, odit consequuntur dolore nisi ipsa facere officiis. Itaque.'
  }
]
  

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  });
  return (
    <section id='progress' className='progres'>
      <div className="container__progress">
      <div class="header__progress">
          <h5>What are We working On?</h5>
        <h2>Project On Progress</h2>
        </div>
      </div>
      
      <Swiper data-aos='fade-up' className="gallery__container"
      // install Swiper modules
      modules={[Pagination]}
      breakpoints={{
        1024: {
          slidesPerView:2,
          spaceBetween:-80
        },
        999: {
          slidesPerView:1,
          spaceBetween:50
        }
      }}
      pagination={{ clickable: true }}>
        {
          data.map(({image, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='gallery'>
                <img src={image} />
                <div className="intro">
                  <h4>{name}</h4>
                  <p><span>{name}</span>{review}
                  <Button id="btn__intro" variant="dark">Lihat Selengkapnya</Button>
                  </p>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
    
  )
}

export default Gallery