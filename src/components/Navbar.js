import React from 'react'
import {  Nav} from './styles/Header.styled'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <Nav>
                <ul>
                    <li><a href=" "><Link to="/design">Design</Link></a></li>
                    <li><a href=" "><Link to="/gallery">Gallery</Link></a></li>
                    
                    <li><h2 className="logo"><Link to="/">My LOGO</Link></h2></li>
                    <li><a href=" "><Link to="/story">Our Story</Link></a></li>
                    <li><a href=" ">Wishlist</a></li>
                </ul>
            </Nav>
    </>
  )
}

export default Navbar