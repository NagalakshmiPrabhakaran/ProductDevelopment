import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
const Loginfrist = () => {
  
  return (
    <div>
    <div className='rbody'>
    <nav>
	
    <div className="header">
    <Link to="/" className="logo">DONATING HANDS<br/>ADMIN</Link><br></br>
    <div className="header-right">
    <ul>
    <Link to="/adminlogin"><li>LOGIN</li></Link>
    <Link to="/adminsignup"><li>SIGNUP</li></Link>
    </ul>
    </div>
      </div>
      </nav>
      </div>
      <Footer/>
	  </div>
  )
}


export default Loginfrist