import styled from 'styled-components'

export const StyledHeader = styled.div`

`

export const Nav = styled.nav`
    width: 100%;
    margin: 0;
    padding-top: 1px;
    padding-bottom: 1px;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    
    ul {
        
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        align-items: center;
        margin-right: 20px;
    }


    ul li a {
        text-decoration: none;
        color: black;

    }

    a:hover {
        
        border-bottom: 2px solid black;
        
    }

    a:visited {
        color: black;
    }

    
`

export const Hero = styled.div`

    
    background-image: url("images/heroimage.jpg");
    height: 30em;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-bottom: 2em;

    .hero-text{
        height: 100%;
        display: flex;
        flex-direction: column;
        color: white;
        justify-content: center;
        margin-left: 7%;
        font-size: 56px;
        transition: all 250ms ease-in;
        

        span{
            
            font-size: 8rem;
            font-weight: 600;
            
        }
        p{
            margin: 0;
            padding: 0;
            
            line-height: 1em;
        }
    }

    @media (max-width: 600px) {
        .hero-text{
            span {
                font-size: 42px;
            }

            p{
                font-size: 36px;
            }
        }
    }
`