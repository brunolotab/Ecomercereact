import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import {  FiShoppingCart } from "react-icons/fi";
import CartContext from './cartContex';

function Nav() {

    const {items, setSearchTerm,  checkItem} = useContext(CartContext);

  const myitems = useRef (JSON.parse(localStorage.getItem('user')));


     const nav = {
         width:'100%',
        padding:'10px 10rem',
        background:'orange',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center'

     }
     const searchcss = {
        width:'70%',
        padding:'5px',
        borderRadius:'30px',
        background:'#fff'
     }
    // input::placeholder {
    //     font-size: 15px;
    // } 
    // const input:active{
    //     border: 1px solid blue;
    // }
   
  return (
    <div style={nav}>
        <Link to= {'/'}>
            <h1>wear</h1>
        </Link>
        <div style={searchcss}>
            <input style={{width:'70%', border:'none', outline:'none', padding:'5px', fontSize:'16px'}} type='text' placeholder='Search here...' onChange={(e)=> {setSearchTerm(e.target.value)}}/>
        </div>

        <Link to = {'/Checkout2'}>
            <div className='cartt'>
                <FiShoppingCart size={30}/>
                <span>{myitems.current && myitems.current.length}</span>
            </div>
        </Link>
    </div>
  )
}

export default Nav