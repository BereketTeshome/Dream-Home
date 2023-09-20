import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import Loading from '../components/Loading';
import {FaShower} from 'react-icons/fa'
import {BsFillCarFrontFill} from 'react-icons/bs'
import {MdLocationOn, MdMeetingRoom} from 'react-icons/md'
import Map from '../components/Map';

const Property = () => {
    const [estate, setEstate] = useState([])
    const [loading, setLoading] = useState(false)
    const [readMore, setReadMore] = useState(false)
    const location = window.location.pathname.split('/')[2]

  useEffect(() => {
    const fetchData = async () =>{
      try {
        setLoading(true)
        const res = await axios.get(`http://localhost:3001/estate/get/${location}`)
        setEstate([res.data.estate])
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleRead = () => {
    setReadMore(!readMore)
  }
  

  return (
    <>
      <Navbar />
      <div className='property'>
        <div>
        {estate.map((item)=> {
          const {_id, country, city, address, image, title, description, price, bedrooms, parkings, bathrooms} = item

          return(
            <div key={_id} className='property-container'>
                {loading && <Loading />}
                <div className='property-right'>
                    <img src={image} alt={title} />
                </div>
                <div className='property-left'>
                    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>             
                    <h3 style={{color:'#1F3E72'}}>{title}</h3>
                        <h3 style={{color:'#07c207', fontSize:'1.2rem'}}>${parseInt(price.replace(/,/g, '')).toLocaleString()}</h3>
                    </div>  
                    <div>
                        <p style={{fontSize:'0.9rem', color:'#888', marginBottom:'30px'}}><MdLocationOn style={{color:'#1F3E72', fontSize:'1.3em', position:'relative', top:'3px'}}/>{city}, {address}, {country}</p>

                        <div className='icons-container'>
                          <div><BsFillCarFrontFill /> {parkings}<p>Parking</p></div>
                          <div><MdMeetingRoom /> {bedrooms}<p>Bedroom</p></div>       
                          <div><FaShower /> {bathrooms} <p>Bathroom</p></div>
                        </div>

                        <div><span style={{fontSize:'0.9em', color:'#00294e'}}>Description:</span> <span style={{fontSize:'0.8em'}}>{readMore || description.length < 200 ? description : `${description.substring(0,200)}... `}</span>{description.length > 200 && <button className='readMore-btn' onClick={() => handleRead()}>{readMore ? ' _Show Less': ' _Show More'}</button>}</div>
                        
                    </div> 
                </div>
        <div>
          <Map address={address} city={city} country={country}/>
        </div>
            </div>
          )
        })}
      </div>
      </div>
      
    </>
  )
}

export default Property
