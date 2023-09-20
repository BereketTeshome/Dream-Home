import './App.css'
import { lazy, Suspense } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Loading from './components/Loading'

const Main = lazy(()=> import('./components/Main'))
const Properties = lazy(()=> import('./pages/Properties'))
const About = lazy(()=> import('./pages/About'))
const Login = lazy(()=> import('./pages/Login'))
const Register = lazy(()=> import('./pages/Register'))
const Property = lazy(()=> import('./pages/Property'))
const Favorites = lazy(()=> import('./pages/Favorites'))
const Search = lazy(()=> import('./pages/Search'))
const Uploads = lazy(()=> import('./pages/Uploads'))


function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/properties' element={<Properties />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/property/:id' element={<Property />}/>
          <Route path='/properties' element={<Properties />}/>
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/uploads' element={<Uploads />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
      
    </div>
  )
}

export default App
