import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './About.css'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  });
  return (
    <section id="about" className='about'>
      <div className='container container__about'>
        <div className='header__about'>
          <h5>Who Are We?</h5>
          <h2>About Us</h2>
          <span className='header'></span>
        </div>
        <p>PT. Geo Recontruction Marger didirikan di Bandung tahun 2018 dimulai sebagai distributor alat pekerjaan ( ex.Eropa ).

          Seiring dengan perkembangan  zaman, kami terus melakukan pengembangan di berbagai bidang  antara  lain di bidang konstruksi serta  berusaha memperluas jejaring konstruksi dan kapasitas bisnis pasokan umum di seluruh Indonesia dalam industri , infrastruktur manufaktur, pertambangan dan migas.</p>
          
          <div className='services'>
            <div data-aos='fade-right' className='box'>
              <h5>Our Values</h5>
            <ul>
              <li>Kepercayaan:</li>
              <li>Memberikan apa yang telah kami janjikan dengan penuh kejujuran dan integritas</li>
            </ul>
            
            <ul>
              <li>Passion:</li>
              <li>Energi, Semangat & Antusiasme. Berkomitemen tanpa henti untuk menjadi yang terbaik.</li>
            </ul>
            
            <ul>
              <li>Kualitas:</li>
              <li>Memberikan yang terbaik, untuk kepuasan dan harapan pelanggan.</li>
            </ul>
            </div>
            
            <div data-aos='fade-left' className='box'>
              <h5>VISI</h5>
              <p>Menjadi perusahaan jasa pelaksanaan konstruksi terdepan di wilayah Indonesia yang berkembang secara berkesinambungan dengan mengutamakan keselamatan dan kesehatan kerja.</p>
            
              <h5>MISI</h5>
              <ul className='misi'>
                <li>1. Memberikan pelayanan, mutu dan kepuasan yang terbaik kepada pelanggan.</li>
                <li>2. Mengutamakan keselamatan dan kesehatan kerja di dalam pelaksanaan pekerjaan</li>
                <li>3. Membangun serta menciptakan citra terbaik perusahaan.</li>
                <li>4. Mengusung nilai nilai pengembangan kompetensi karyawan secara berkelanjutan.</li>
                <li>5. Turut berpartisipasi dalam pembangunan negara Republik Indonesia.</li>
              </ul>
            </div>
          </div>         
      </div>
    </section>
  )
}

export default About