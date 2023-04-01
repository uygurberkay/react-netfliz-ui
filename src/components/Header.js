import '../styles/Header.css';
import React from 'react'
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";


export default function Header(props) {
const navigate = useNavigate();
  return (
    <div className='container flex a-center j-between'>
      <div className="logo">
        <img src={logo} alt="logo_img" />
      </div>
      <button className='logo__button' onClick={()=> {navigate(props.login? '/login' : '/signup')}}>
        {props.login ? 'Log in' : 'Sign in'}
      </button>
    </div>
  )
}

