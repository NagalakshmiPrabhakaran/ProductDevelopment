import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import jsCookie from 'js-cookie';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { googleProvider,auth } from './Firebaseconfig';
import './Log.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getItem, setRole, setToken, setemail } from './LocalStorage';
import bcrypt from 'bcryptjs';
import axios from 'axios';
// import {dogimg} from '../assets/dog.jpg';
function LoginPage() {
  const handleGoogleLogin=async()=>{
    console.log("clicked  ")
    try{
        await signInWithPopup(auth,googleProvider)
        .then((result)=>{
            const user =result.user;
            console.log(user.displayName);
            console.log(user.email)
            jsCookie.set("UserEmail",user.email)
            console.log(user.emailVerified)
            const credential=GoogleAuthProvider.credentialFromResult(result);
            console.log(credential);
            let name=jsCookie.get("UserEmail");
            alert(name,"is present in js cookie")
            
     } )
    }catch(err){
       console.log(err);     
        }
    }
 const [formData, setFormData] = useState({
   email: '',
   password: '',
 });
  // const[username,setUsername]=useState('');
  //const [email, setEmail] = useState('');
  //const[password,setPassword]=useState('');
  // const[user,setUser]=useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  
  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (formData.email.length === 0) {
      errors.email = 'Email is required';
    }

    if (formData.password.length === 0) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        email: '',
        password: '',
      });

      const userCredentials = {
        email: formData.email,
        password: formData.password,
        

      };

      axios.post("http://localhost:8080/auth/login",userCredentials).then(response=>{
        const token=response.data.token;
        if (token) {
          setToken(token)
          setemail(userCredentials.email);
          const userType=response.data.role;
          setRole(userType)
              if(userType=="ADMIN"){
                nav("/admin");
              }
              
              else {
                alert("Invalid user role");
              }
            } else {
              alert("Invalid token. Please try again.");
            }
      }).catch(error=>{
        alert(error.response.data)
     
      })
    }
  };

  // const handleEmailChange = (e) => {
  //   setFormData.email(e.target.value);
  //   setFormErrors({ ...formErrors, email: '' });
  // };

  // const handlePasswordChange = (e) => {
  //   setFormData.password(e.target.value);
  //   setFormErrors({ ...formErrors, password: '' });
  // };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  
const handle= () => {
    nav("/signup");
  };


  return (
    <div className={`loginContainer`}>
      <div className="forms-container">
        <div className="signin-signup" >
          <form  className="sign-in-form loginForm" >
            <h2 className="title">Sign in</h2>

            <div className='input-field'>
            <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
            <input className='LoginInput' type='email' placeholder='Email' name='email' value={formData.email}
            onChange={handleChange}/>
            </div>
            {formErrors.email && <p className="error">{formErrors.email}</p>}
            
            <div className='input-field'>
            <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
            <input className='LoginInput' type='password'  name='password' placeholder='Password' value={formData.password}
            onChange={handleChange}/>
            </div>
            {formErrors.password && <p className="error">{formErrors.password}</p>}
            
            <button className='btn1' onClick={validate} type="submit">Sign In</button>
           
            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              
              <a href="#" onClick={handleGoogleLogin} className="social-icon">
                <FontAwesomeIcon  icon={faGoogle} className='my-auto mx-auto'/>
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto'/>
              </a>
            </div>
          </form>
          
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="contentLogin">
            <h3 className='loginh3'>New here?</h3>
            <p className='loginp'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
             <button className="btn transparent" onClick={handle}>
              Sign up
              </button>
          </div>
          
        </div>
        
      </div>
    </div>
  )}

  export default LoginPage