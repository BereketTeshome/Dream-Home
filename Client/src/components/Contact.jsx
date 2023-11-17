import React from 'react'
import about from '../assets/about.jpg'
import { IoMdCall } from 'react-icons/io';
import { BiLogoGmail, BiLogoTelegram } from 'react-icons/bi';


const Contact = () => {
  return (
    <>
    <div className='contact' id='contact'>
      <div className='contact-left'>
        <h2 style={{color:'#FFA500'}}>Our Contact Us</h2>
        <h1 style={{color:'#1F3E72'}}>Easy to contact us</h1>
        <p style={{fontSize:'0.9rem', color:'#888', fontWeight:'100'}}>We always ready to help by providing the best services <br/> for you.We believe a good place to live can make your life better</p>

      <div className='contact-box-container'>
        <div className='contact-container'>
          <div className='sub-contact-container'>
            <div>
              <IoMdCall className='contact-icon'/>
            </div>
            <div>    
              <b style={{color:'#1F3E72'}}>Call</b> <br />
              <p>+251-977622890</p>
            </div>
          </div>

          <div>
            <button>Call Now</button>
          </div>
        </div>

        <div className='contact-container'>
          <div className='sub-contact-container'>
            <div>
              <BiLogoGmail className='contact-icon'/>
            </div>
            <div>    
              <b style={{color:'#1F3E72'}}>Mail</b> <br />
              <p>bereketteshome685@gmail</p>
            </div>
          </div>

          <div>
            <a href="mailto:bereketteshome685@gmail.com"><button>Mail Now</button></a>
          </div>
        </div>
        
        <div className='contact-container'>
          <div className='sub-contact-container'>
            <div>
              <BiLogoTelegram className='contact-icon'/>
            </div>
            <div>    
              <b style={{color:'#1F3E72'}}>Telegram</b> <br />
              <p>@Medication12</p>
            </div>
          </div>

          <div>
            <a href="https://t.me/Medication12"><button>DM Now</button></a>
          </div>
        </div>
      </div>

      </div>
        
        <div className='contact-right'>
          <img src={about} alt="contact" />
        </div>

  </div>
        <div className='subscribe'>
          <div className='subscribe-container'>
            <div style={{marginTop:'60px'}}>
              <h1 className='popularh2'>Get started with Dream-Home</h1>
              <p>Subscribe and find super attractive price quotes from us.
                  Find your residence soon</p>
            <a href="mailto:bereketteshome685@gmail.com"><button>Get Started</button></a>
            </div>
          </div>
        </div>
  </>
  )
}

export default Contact
