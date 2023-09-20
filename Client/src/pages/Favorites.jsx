import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import Loading from '../components/Loading';
import { Link, useNavigate } from 'react-router-dom';
import Heart from '../components/Heart';
import Search from '../components/Search';
import no_fav from '../assets/no-fav.png'

const Favorites = () => {
  const [estate, setEstate] = useState([])
  const [loading, setLoading] = useState(false)
  const favorites = JSON.parse(localStorage.getItem("favorite"))
  const navigate = useNavigate()

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
        <div className='properties-container'>
        {estate.map((item)=> {
          const {_id, city,image, title, price} = item
          return(
            <>   
            {favorites && favorites.includes(_id) &&
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
            }
            </>
          )
        })}
      {!favorites || favorites.length < 1 && 
        <div className='no-fav-container'>
          {loading ? <Loading /> : <img src={no_fav} alt="no fav" />}
          <h2>You don't have any favorite property</h2>
          <p>You can add item to favorites by clicking on the heart icon.</p>
          <button onClick={()=> {navigate(-1)}}>Go Back</button>
        </div>}
      </div>
      </div>   
      <Footer />
    </>
  )
}

export default Favorites
