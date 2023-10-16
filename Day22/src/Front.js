import React from 'react';
import './Front.css';
import { Link } from 'react-router-dom';

export default function Front() {
  return (
    <div className="frontContainer">
    <img src='https://www.electricaltimes.co.uk/wp-content/uploads/2018/10/Helping-hand....jpg' className='frontimg'></img>
      <div className="frontContent">
        <h1>Welcome to Donating Hands</h1>
        <p>Choose an option as you:</p>
        <button id="button1" className="btnfront"><Link to ='/home1'>Admin</Link></button>
        <button id="button2" className="btnfront"><Link to ='/home'>User</Link></button>
      </div>
    </div>
  );
}
