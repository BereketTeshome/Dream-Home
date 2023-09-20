import React, { useState } from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

const Heart = ({id}) => { 

    const [favorite, setFavorite] = useState(false) 
    const token = document.cookie.split('=')[1]

    let fav = JSON.parse(localStorage.getItem("favorite"))
    
    const handleLike = () => {
        setFavorite(!favorite)
        let favorites = JSON.parse(localStorage.getItem("favorite") || "[]")
        favorites.push(id)
        localStorage.setItem("favorite", JSON.stringify(favorites));
    }


    const handleDisLike = () => {
        let favorites = JSON.parse(localStorage.getItem("favorite") || "[]")
        let index = favorites.findIndex(productId => productId === id);
        favorites.splice(index, 1);
        setFavorite(!favorite)
        localStorage.setItem("favorite", JSON.stringify(favorites));
        window.location.reload()
    }

    
  return (
    <div>
        {token && <button style={{background:'none', border:'none'}} ><span>{favorite || fav && fav.includes(id) ? <AiFillHeart className='fav-icon' onClick={() => handleDisLike()}/> : <AiOutlineHeart className='fav-icon' onClick={() => handleLike()}/>}</span></button>}
    </div>
  )
}

export default Heart
