import React from 'react'



import { StyledHeader, Hero } from './styles/Header.styled'

const Header = () => {
    return (
        <StyledHeader>
            
            <Hero>
                <div className="hero-text">
                    <span>Sustainability</span>
                    <p>doesn't have to be ugly</p>
                </div>
            </Hero>
        </StyledHeader>
    )
}

export default Header