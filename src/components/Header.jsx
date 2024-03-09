
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";


const Header = () => {
  return (
    <div className="headerSection">
        <div className="left">
           <h1 className='logo'><span className='Life'>Life</span><span className='Style'>Style</span></h1> 
        </div>
        <div className="center">
            
                <ul>
                    <li>Men</li>
                    <li>Woman</li>
                    <li>Kids</li>
                    <li>Beauty</li>
                </ul>
          
        </div>
        <div className="serch">
            <input type="text" placeholder='Serch..?' />
        </div>
        <div className="right">
            <div className="signin">
                Singin / Singup
            </div>
            <div className="cart"><FaCartArrowDown /></div>
        </div>
    </div>
  )
}

export default Header