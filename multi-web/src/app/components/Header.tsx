import React from 'react'
import Link  from "next/link"
import { FaShoppingCart } from 'react-icons/fa'


export default function Header() {
  return (
    <header className='header'>
        <h1 className='logo'>Glowup</h1>
        <nav className='link'>
            <Link href="/">Home</Link>
            <Link  href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
        </nav>
            <FaShoppingCart  style={{color:'white', fontSize :"20px", cursor:"pointer "}}/>
    </header>
    
  )
}
