import styled from 'styled-components'

export const FooterContainer = styled.div`
    background-color: #a3aead;
    display: flex;
    flex-direction: column;
    padding-bottom: 5em;
    
    h2{
        padding-top: 2em;
        margin: 0 auto;
    }

      
    .links-container{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .page-links{
        li{
            list-style: none;
            margin: 1em 0;
            a{
                text-decoration: none;
                color: black;
            }
            a:hover{
                color:#d5b27a;
                
            }
        }
    }
    .social-media-links{
        display: flex;
        justify-content: flex-end;
        margin: 0 2em;
        li{
            list-style: none;
            margin: 0 1em;
            a{
                text-decoration: none;
                color: black;
            }
            a:hover{
                cursor: pointer;
                color:#d5b27a;
            }
        }
    }

    
`