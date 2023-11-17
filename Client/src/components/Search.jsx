import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <div className='home-container'>
        <form action="/search" method='GET' style={{boxShadow:'0px 0px 4px 1px #4161DF',position:'relative', top:'-70px', marginBottom:'50px'}}>
        <input type="search" name='searchTerm' placeholder='Search by Title/City/Country/Address' />
        <button type='submit'><AiOutlineSearch style={{position:'relative', top:'3.5px', left:'1px', scale:'1.3'}}/></button>
        </form>
    </div>
  )
}

export default Search
