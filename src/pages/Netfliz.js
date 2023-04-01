import '../styles/Netfliz.css'
import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider';
import BackgroundImage from '../assets/home.jpg'
import MovieLogo from '../assets/homeTitle.webp'
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import {
  useSelector, 
  useDispatch 
} from 'react-redux'
import {
  fetchMovies, 
  getGenres,
} from '../store'

const Netfliz = () => {


  /* To navigate other pages */
  const navigate = useNavigate()

  /* Adjust scroll visibility on navbar */
  const [isScrolled, setIsScrolled] = useState()

  
  const genres = useSelector((state) => state.netfliz.genres);

  const movies = useSelector((state) => state.netfliz.movies);

  const genresLoaded = useSelector((state) => state.netfliz.genresLoaded);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenres())
  },[])     

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);


  /* Navbar visibility */
  window.onscroll= () => {
    setIsScrolled(window.scrollY === 0 ? false : true )
    return () => (window.onscroll = null)
  }

  return (
    <div className='fragment'>

      <Navbar isScrolled={isScrolled} />
      <div className='hero'>
        <img 
          src={BackgroundImage} 
          alt="backgroundImage" 
          className='background-image'
        />
        <div className="container">
          <div className="logo">
            <img 
              className='logo__img'
              src={MovieLogo} 
              alt="Movie Logo"
            />
            <div className="buttons flex">
              <button 
                className='flex j-center a-center'
                onClick={()=> navigate('/player')}
              >
                <FaPlay/> Play 
              </button>
              <button 
                className='flex j-center a-center'
              >
                <AiOutlineInfoCircle/> More Info 
              </button>
            </div>
            
          </div>
        </div>
      </div>

    <Slider movies={movies}/>

    </div>
  )
}

export default Netfliz