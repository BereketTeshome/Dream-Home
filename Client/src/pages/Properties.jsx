import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import Heart from '../components/Heart';
import { ToastContainer } from 'react-toastify';
import Search from '../components/Search';
import img from '../assets/real-estate.jpg'

const Properties = () => {
  const [estate, setEstate] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () =>{
      try {
        setLoading(true)
        const res = await axios.get("http://localhost:3001/estate/get")
        setEstate(res.data.estate)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Navbar />
      <div className='properties'>
        <Search />

        {/* <div className='properties-container' >
          
        </div> */}

          

        <div className='properties-container'>
        {estate.map((item)=> {
          const {_id, city,image, title, price} = item
          return(
            <div key={_id} className='hidden-div'>
              {<Link to={`/property/${_id}`} className='property-link'>
                <div className='sub-popular-container'>
                  <img src={image} alt={title} />
                  <p style={{color:'#07c207', fontSize:'small'}}><span>$</span>{parseInt(price.replace(/,/g, '')).toLocaleString()}</p>
                  <h3 style={{color:'#1F3E72'}}>{title.length > 18 ? `${title.slice(0, 18)}..` : title}</h3>
                  <p style={{fontSize:'0.9rem', color:'#888'}}>{city}</p>
                </div>
              </Link> || 

              <Link to="/uploads" className='property-link'>
                <div className='sub-popular-container'>
                  <img src={img} alt="real-estate image" />
                  <p style={{color:'#07c207', fontSize:'small'}}><span>$</span>17,000,000</p>
                  <h3 style={{color:'#1F3E72'}}>Single Family Home</h3>
                  <p style={{fontSize:'0.9rem', color:'#888'}}>Tennessee</p>
                </div>
              </Link>
              
              }
              <Heart id={_id}/>
            </div>
          ) 
        })}
      {loading && <Loading />}
      </div>
      </div>
      
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Properties
