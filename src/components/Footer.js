import React from 'react'
import { FooterContainer } from './styles/Footer.styled'
import ContactForm from './ContactForm'
import { ContactContainer } from './styles/ContactForm.styled'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <h2>Let's collaborate.</h2>
                <ContactContainer>
                    <ContactForm />
                </ContactContainer>


                <div className="links-container">
                    <ul className="page-links">
                        <li><a href="# ">Home</a></li>
                        <li><a href="# ">Gallery</a></li>
                        <li><a href="# ">Design</a></li>
                        <li><a href="# ">Our Story</a></li>
                    </ul>

                    <ul className="social-media-links">
                        <li><a href="# ">Facebook</a></li>
                        <li><a href="# ">Instagram</a></li>
                        <li><a href="# ">Twitter</a></li>

                    </ul>
                </div>
            </FooterContainer>

        </>
    )
}

export default Footer