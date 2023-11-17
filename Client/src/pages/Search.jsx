import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'
import axios from 'axios'
import notFound from '../assets/404.png'
import { Link } from 'react-router-dom'
import Heart from '../components/Heart'
import {TbArrowBackUpDouble} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';

const Search = () => {

  const [data, setData] = useState([])
  const searchTerm = window.location.search.split('=')[1]
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchData = async() =>{
        setLoading(true)
        try {
            const res = await axios.post(`https://dream-home-seven.vercel.app/estate/search?searchTerm=${searchTerm}`)
            setData(res.data.estate)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error)
        }
    }
    fetchData();      
}, [searchTerm])

if (loading) {
  return (
    <main>
      <Loading />
    </main>
  )
}

if (data.length < 1) {
  return (
    <>
    <Navbar />
    <div style={{padding:'0 7%'}}>
      <div className='search-header'>
        <h2><span style={{color:'red'}}>No</span> Results Found for: <span style={{fontStyle:'italic', color:"#16A085"}}>"{searchTerm}"</span></h2>
        <TbArrowBackUpDouble className='goBack-icon' onClick={() => navigate(-1)}/>
      </div>
      <div className='not-found-container'>
        <img src={notFound} alt="not-found" className='not-found'/>
      </div>
    </div>
    </>
  )
}
 
  return (
    <>
    <Navbar />
    <div style={{padding:'0 7%'}}>
    <div className='search-header'>
      <h2>Results for: <span style={{fontStyle:'italic', color:"#16A085"}}>"{searchTerm}"</span></h2>
      <TbArrowBackUpDouble className='goBack-icon' onClick={() => navigate(-1)}/>
    </div>
      
      <div className='properties-container'>
      {data.map((item)=> {
          const {_id, city,image, title, price} = item
          return(
            <div style={{position:'relative'}} key={_id}>
            <Link to={`/property/${_id}`} className='property-link'>
              <div className='sub-popular-container'>
                <img src={image} alt={title} />
                <p style={{color:'#07c207'}}><span>$</span>{price}</p>
                <h3 style={{color:'#1F3E72'}}>{title.length > 18 ? `${title.slice(0, 18)}..` : title}</h3>
                <p style={{fontSize:'0.9rem', color:'#888'}}>{city}</p>
              </div>
            </Link>
            <Heart id={_id}/>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default Search
