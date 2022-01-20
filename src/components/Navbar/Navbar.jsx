import React from 'react';
import './Navbar.scss'
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='nav flex--2'>
      <p><span>send</span>FREIGHT</p>
      <div className='searchbar'>
        <input placeholder='Search'/>
        <BiSearch className='icon'/>
      </div>
      <div className='button--double flex--2'>
        <button>Request Quote</button>
        <button>Book Shipment</button>
      </div>
    </div>
  );
};

export default Navbar;
