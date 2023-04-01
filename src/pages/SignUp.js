import '../styles/Signup.css';
import React,
{useState}
from 'react'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';
import {firebaseAuth} from '../utils/firebase-config'
import 
{ createUserWithEmailAndPassword, 
  onAuthStateChanged }
 from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  /*To hide/ show password */
  const [showPassword, setShowPassword] = useState(false)
  /*To register via firebase */
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  const handleSignIn = async () => {
    try {
      const {email,password} = formValues
      await createUserWithEmailAndPassword(firebaseAuth , email, password)
    } catch (error) {
      console.log(error)
    }
  }
  /* Get us main page if we login any user */
  onAuthStateChanged(firebaseAuth,(currentUser) => {
    if(currentUser) {
      navigate('/')
    }
  });

  return (
    <>
    <div className='container' showPassword={showPassword}>
      <BackgroundImage/>
      <div className="content">
        <Header/> 
        <div className="body flex column a-center j-center">
          <div className="text flex column j-center a-center">
            <h1>Unlimited Movies, Tv shows and more..</h1>
            <h4>Watch anytime. Cancel anytime..</h4>
            <h6>
              Ready to watch? Enter your email to create or restart subscription.
            </h6>
          </div>          
            <div className="form">
              <input 
                type="email" 
                placeholder='Email Address' 
                name='email' 
                value={formValues.email} 
                onChange={(e) => setFormValues({...formValues,[e.target.name]:e.target.value})}
              />
              { showPassword && (
                <input 
                  type="password" 
                  name="password" 
                  placeholder='Password' 
                  value={formValues.password} 
                  onChange={(e) => setFormValues({...formValues,[e.target.name]:e.target.value})}
                />
              )}
              {!showPassword && (
                <button 
                  onClick={() => {setShowPassword(true)}}
                >
                  Get started
                </button>
              )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default SignUp