import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import Loading from '../components/Loading';
import { Link, useNavigate } from 'react-router-dom';
import Heart from '../components/Heart';
import { ToastContainer } from 'react-toastify';
import Search from '../components/Search';
import jwt from 'jwt-decode'
import EditProperty from '../components/EditProperty';
import no_fav from '../assets/no-fav.png'

const Uploads = () => {
  const [estate, setEstate] = useState([])
  const [loading, setLoading] = useState(false)
  const token = document.cookie.split('=')[1]
  const userId = token && jwt(token).userID
  const filteredData = estate.filter((item) => item.createdBy == userId)
  const [modalOpened, setModalOpened] = useState(false)
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

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/estate/delete/${id}`)
    window.location.reload()
  }

  const handleEdit = (id)=> {
    setModalOpened(true)
  }

  return (
    <>
      <Navbar />
      <div className='properties'>
        <Search />

        <div className='properties-container'>
          {filteredData.map((item)=> {
            const {_id, city,image, title, price} = item
            return(
              <div key={_id} className='upload-property-container'>
              <Link to={`/property/${_id}`} className='property-link'>
                <div className='sub-upload-container'>
                  <img src={image} alt={title} />
                  <p style={{color:'#07c207', fontSize:'small'}}><span>$</span>{parseInt(price.replace(/,/g, '')).toLocaleString()}</p>
                  <h3 style={{color:'#1F3E72'}}>{title.length > 18 ? `${title.slice(0, 18)}..` : title}</h3>
                  <p style={{fontSize:'0.9rem', color:'#888'}}>{city}</p>
                </div>
              </Link>

              <div className='uploads-icon-container'>
                <button onClick={()=>{handleEdit(_id)}} className='edit-btn'>EDIT</button>
                  <EditProperty 
                    opened={modalOpened}
                    setOpened={setModalOpened}
                    id={_id}
                  />
                <button onClick={()=>{handleDelete(_id)}} className='delete-btn'>DELETE</button>
              </div>

              <Heart id={_id}/>
              </div>
            )
          })}
        {loading && <Loading />}

        <div className='no-fav-container'>
          {filteredData.length === 0  && <div>
            <img src={no_fav} alt="no fav" />
            <h2>You haven't uploaded any property yet.</h2>
            <button onClick={()=> {navigate(-1)}}>Go Back</button>
          </div>}
        </div>

      </div>
      </div>
      
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Uploads
