import '../styles/Navbar.css';
import React,
{useState}
from 'react'
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import {FaPowerOff, FaSearch} from 'react-icons/fa';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';


export default function Navbar({isScrolled}) {
    /* To navigate according to login status*/
    const navigate = useNavigate();
    /* To hide and show Search Bar */
    const [showSearch,setShowSearch] = useState(false)
    /* To hide and show Search Input */
    const [inputHover, setInputHover] = useState(false)


    const links= [
        {
            name:'Home',
            link:'/',
        },
        {
            name:'Tv Shows',
            link:'/tv',
        },
        {
            name:'Movies',
            link:'/movies',
        },
        {
            name:'My List',
            link:'/mylist',
        }
    ]
    /* Get us login page if not login any user */
    onAuthStateChanged(firebaseAuth,(currentUser) => {
        if(!currentUser) {
          navigate('/login')
        }
      });

  return (
    <>
        <div className='container'>
            <nav className={`flex ${isScrolled ? 'scrolled' : ''}`}>
                <div className="left flex a-center">
                    <div className="brand flex a-center j-center">
                        <img className='logo__img' src={logo} alt="logo" />
                    </div>                      
                    <ul className="links flex">
                        {links.map(({name,link}) => {
                                return (
                                    <li key={name}>
                                        <Link to={link}>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="right flex a-center">
                    {/* Search Container */}
                    <div className={`search ${showSearch ? 'show-search' : ''}`}>
                        <button 
                            className='search__button'
                            onFocus={()=> setShowSearch(true)} 
                            onBlur={()=> {
                                if(!inputHover) setInputHover(false)
                            }}
                        >
                            <FaSearch className='search__button__svg'/>
                        </button>
                        <input 
                            className='search__input'
                            type="text" 
                            placeholder='Search'
                            onMouseEnter={() => setInputHover(true)}
                            onMouseLeave={() => setInputHover(false)}
                            onBlur={() => {
                                setInputHover(false)
                                setShowSearch(false)
                            }}
                        />
                    </div>
                    {/* Sign out Button */}
                    <button 
                        className='button'
                        onClick={() => signOut(firebaseAuth)}>
                        <FaPowerOff className='button__svg'/>
                    </button>
                </div>
            </nav>
        </div>
    </>
  )
}
