import '../styles/Login.css';
import React,
{useState}
from 'react'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import {firebaseAuth} from '../utils/firebase-config'
import 
{ onAuthStateChanged, 
  signInWithEmailAndPassword}
 from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  /*To register via firebase */
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async () => {
    try {
      const {email,password} = formValues
      await signInWithEmailAndPassword(firebaseAuth , email, password)
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(firebaseAuth,(currentUser) => {
    if(currentUser) {
      navigate('/')
    }
  });

  return (
    <>
      <BackgroundImage/>
      <div className="content">
        <Header/>
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="container flex column  a-center">
              <h3 className='flex a-center j-center'>Login</h3>
                <input 
                  type="email" 
                  placeholder='Email Address' 
                  name='email' 
                  value={formValues.email} 
                  onChange={(e) => setFormValues({...formValues,[e.target.name]:e.target.value})}
                />
                <input 
                  type="password" 
                  name="password" 
                  placeholder='Password' 
                  value={formValues.password} 
                  onChange={(e) => setFormValues({...formValues,[e.target.name]:e.target.value})} 
                />
                <button 
                onClick={handleLogin}
                  >
                Log In
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login