import React, { useEffect, useState} from 'react'
import IMG1 from '../assets/prologis.png'
import IMG2 from '../assets/tower.png'
import IMG3 from '../assets/equinix.png'
import IMG4 from '../assets/realty.png'
import value from '../assets/value.png'
import axios from 'axios'
import {FaShieldAlt} from 'react-icons/fa'
import {IoMdArrowDropdown} from 'react-icons/io'
import {SiAdblock} from 'react-icons/si'
import {RiMoneyPoundCircleFill} from 'react-icons/ri'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import Heart from './Heart'

const Section = () => {
  const [estate, setEstate] = useState([])
  const [accordionOne, setAccordionOne] = useState(false)
  const [accordionTwo, setAccordionTwo] = useState(false)
  const [accordionThree, setAccordionThree] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () =>{
      try {
        setLoading(true)
        const res = await axios.get("http://localhost:3001/estate/getLimited")
        setEstate(res.data.estate)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  
  return (
    <div className='section'>
      <div className='section-imgs'>
        <img src={IMG1} alt="image1" className='image1'/>
        <img src={IMG2} alt="image2" />
        <img src={IMG3} alt="image3" />
        <img src={IMG4} alt="image4" />
      </div>

      <div>
        <h2 style={{color:'#FFA500'}}>Best Choices</h2>
        <h1 style={{color:'#1F3E72', marginBottom:'40px'}} className='popularh2'>Popular Residencies</h1>
      </div>
      {loading && <Loading />}

      <div className='popular-container'>
        {estate.map((item)=> {
          const {_id, city, image, title, price} = item
          return(
            <div style={{position:'relative'}} key={_id}>
              <Link to={`/property/${_id}`} className='property-link'>
                <div className='sub-popular-container'>
                  <img src={image} alt={title} />
                  <p style={{color:'#07c207', fontSize:'small'}}><span>$</span>{parseInt(price.replace(/,/g, '')).toLocaleString()}</p>
                  <h3 style={{color:'#1F3E72'}}>{title.length > 18 ? `${title.slice(0, 18)}..` : title}</h3>
                  <p style={{fontSize:'0.9rem', color:'#888'}}>{city}</p>
                </div>
              </Link>
              <Heart id={_id}/>
            </div>
          )
        })}
      </div>

      <div className='value'>
        <img src={value} alt="value" />
        <div className='value-right'>
        
        <div className='accordion-title'>
          <h2 style={{color:'#FFA500'}}>Our Value</h2>
          <h1 style={{color:'#1F3E72'}}>Value We Give to You</h1>
          <p style={{fontSize:'0.9rem', color:'#888', fontWeight:'100'}}>We always ready to help by providing the best services <br/> for you.We believe a good place to live can make your life better</p>
        </div>
          
            <div className='sub-accordion-container'>
              <div className='accordion-header'>
                <FaShieldAlt className='value-icon'/>
                <h3>Best interest rates on the market</h3>
                <button onClick={()=> {setAccordionOne(!accordionOne)}}><IoMdArrowDropdown className='value-icon'/> </button>
              </div>
              <div>
                {accordionOne ? <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p> : null}
              </div>
            </div>

            <div className='sub-accordion-container'>
              <div className='accordion-header'>
                <SiAdblock className='value-icon'/>
                <h3>Prevent unstable prices</h3>
                <button onClick={()=> {setAccordionTwo(!accordionTwo)}}><IoMdArrowDropdown className='value-icon'/> </button>
              </div>
              <div>
                {accordionTwo ? <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p> : null}
              </div>
            </div>

            <div className='sub-accordion-container'>
              <div className='accordion-header'>
                <RiMoneyPoundCircleFill className='value-icon'/>
                <h3>Best price on the market</h3>
                <button onClick={()=> {setAccordionThree(!accordionThree)}}><IoMdArrowDropdown className='value-icon'/> </button>
              </div>
              <div>
                {accordionThree ? <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p> : null}
              </div>
            </div>
              
        </div>
      </div>      
    </div>
  )
}

export default Section
