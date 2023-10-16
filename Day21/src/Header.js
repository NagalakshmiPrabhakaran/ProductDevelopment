import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='head'>
    <>
    {/* Created By CodingNepal */}
    <meta charSet="utf-8" />
    <title>Responsive Navbar with Search Box | CodingNepal</title>
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <nav className='head'>
      <div className="menu-icon-head">
        <span className="fas fa-bars-head" />
      </div>
      <div className="logo-head">DONATING HANDS</div>
      <div className="nav-items-head">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
      </div>
      <div className="search-icon-head">
        <span className="fas fa-search-head" />
      </div>
      <div className="cancel-icon-head">
        <span className="fas fa-times-head" />
      </div>
      
    </nav>
    
  </>
  
    </div>
  )
}

export default Header
