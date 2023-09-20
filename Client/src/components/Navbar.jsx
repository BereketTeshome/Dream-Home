import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import LOGO from '../assets/LOGO.png'
import {Cookies} from 'react-cookie'
import jwt from 'jwt-decode'
import AddProperty from './AddProperty'

const Navbar = () => {
  const token = document.cookie.split('=')[1]
  const cookies = new Cookies()
  const user = token && jwt(token)
  const username = token && user.username.slice(0,2)
  const [pop, setPop] = useState(false)
  const [modalOpened, setModalOpened] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    cookies.remove("token")
    navigate("/")
    window.location.reload()
  }
  const handlePop = () => {
    setPop(!pop)
  }

  const handleAddProperty = () => {
    setModalOpened(true)
  }

  return (
    <header className='navbar'>
      <div>
        <Link to="/"><img src={LOGO} alt="logo" /></Link>     
      </div>
      
      <div className='nav-links'>
        <Link to="/properties">Properties</Link>
        <Link to="/about">About</Link>
        {user ? <a style={{cursor:'pointer'}} onClick={handleAddProperty}>Post</a> : <a href='/login'>Post</a>}
        <AddProperty 
          opened={modalOpened}
          setOpened={setModalOpened}
        />   
      </div>

      <div className='dropdown-container'>
        {token ? <button className='user-btn' onClick={() => handlePop()}>{username}</button>
          : <button className='login-btn'><Link to="/login"><span className='nav-login-btn'>Login</span></Link></button>
        }
        {pop && 
          <div className='dropdown'>
            <Link to="/favorites"><button><p>Favorites</p></button></Link>
            <Link to="/uploads"><button><p>Uploads</p></button></Link>
            <button onClick={() => handleLogout()}><p>Logout</p></button>
          </div>
        }    
      </div>
    </header>
  )
}

export default Navbar
