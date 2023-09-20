import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom'
import LOGO from '../assets/LOGO.png'
import { ToastContainer } from 'react-toastify';
import {Cookies} from 'react-cookie'
import jwt from 'jwt-decode'
import AddProperty from './AddProperty';
import CountUp from 'react-countup'

const Home = () => {
  const token = document.cookie.split('=')[1]
  const cookies = new Cookies()
  const user = token && jwt(token)
  const username = token && user.username.slice(0,2)
  const [popup, setPopup] = useState(false)
  const [modalOpened, setModalOpened] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    cookies.remove("token")
    navigate('/')
    window.location.reload()
  }
  const handlePopup = () => {
    setPopup(!popup)
  }

  const handleAddProperty = () => {
    setModalOpened(true)
  }

  return (
    <div className='home'>
    <header className='navbar' style={{background:'transparent', boxShadow:'0px 0px 0px 0px'}}>
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

        <div>
          {token ? <button className='user-btn' onClick={() => handlePopup()}>{username}</button>
            : <button className='login-btn'><Link to="/login">Login</Link></button>}
          {popup &&
            <div className='dropdown'>
            <Link to="/favorites"><button><p>Favorites</p></button></Link>
            <Link to="/uploads"><button><p>Uploads</p></button></Link>
            <button onClick={() => handleLogout()}><p>Logout</p></button>
          </div>
          }         
        </div>
        
      </div>
    </header>
      <div className='home-container' style={{zIndex:'0'}}>
        <h1>Modern House Make Better Life</h1>
        <p>Find a variety of properties that suit you very easily Forget all difficulties in finding a residence for you</p>
        
        <form action="/search" method='GET'>
          <input type="search" name='searchTerm' placeholder='Search by Title/City/Country/Address'/>
          <button type='submit'><AiOutlineSearch style={{position:'relative', top:'3.5px', left:'1px', color:'#fff', scale:'1.3'}}/></button>
        </form>

        <div className='awards-container'>
          <div>
            <h2><CountUp start={0} end={9000} duration={2}/> <span className='awards-span'>+</span></h2>
            <p>Premium Product</p>
          </div>

          <div>
            <h2><CountUp start={0} end={2000} duration={2}/> <span className='awards-span'>+</span></h2>
            <p>Happy Customer</p>
          </div>

          <div>
            <h2><CountUp start={0} end={28} duration={3}/> <span className='awards-span'>+</span></h2>
            <p>Award Winning</p>
          </div>
          
        </div>

      </div>
      <ToastContainer />
    </div>
  )
}

export default Home
