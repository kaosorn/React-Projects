import styled from 'styled-components'

export const Card = styled.div`
    /* height: 100%;
    width: 100%;
    
    text-align: center;
    margin: 1;
    padding: 1;
    
    
    
    
    img{
        
        height: 200px;
        max-width: 200%;

    }

    .product-text{
        margin: 2em;
        background-color: red;
    } */

    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 1em;
    text-align: center;

    
    img{
        height: 250px;
        padding: 1em;
         
    }
    
    .product-price{
        font-size: 1.5rem;
        color: #d5b27a;
        font-weight: bold;
    }
`
