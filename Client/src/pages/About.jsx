import React from 'react'
import Navbar from '../components/Navbar'
import {MdOutlineLanguage, MdMenuBook, MdOutlineEmojiEvents} from 'react-icons/md';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
    <Navbar />
    <div className='about'>
      <header className='about_header'>
        <h1>About <span className='about_span'>Us</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam odio, sapiente, ipsam possimus quo vel sequi aspernatur facere incidunt sint ipsum eos deserunt modi animi dolorum atque maiores laboriosam autem.</p>
      </header>

      <section className='about_container'>
        <div className='sub-about-container'>
          <MdMenuBook className='about-icon' fontSize='large'/>
          <h2>MISSION</h2>
          <div></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet ad magnam quis sint similique totam voluptates accusantium, magni iste.</p>
        </div>

        <div className='sub-about-container'>
          <MdOutlineLanguage className='about-icon' fontSize='large'/>
          <h2>VISION</h2>
          <div></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet ad magnam quis sint similique totam voluptates accusantium, magni iste.</p>
        </div>

        <div className='sub-about-container'>
          <MdOutlineEmojiEvents className='about-icon' fontSize='large'/>
          <h2>GOALS</h2>
          <div></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet ad magnam quis sint similique totam voluptates accusantium, magni iste.</p>
        </div>

      </section>

    </div>
      <Footer />
    </>
  )
}

export default About
