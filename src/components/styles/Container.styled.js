import styled from 'styled-components'

export const Container = styled.div`
    margin: 4em;

    

    .sortFilter{
        margin: 2em;
        display: flex;
        justify-content: flex-end;
    }
    .sort{
        margin-right: 2em;
        cursor: pointer;
    }

    .filter{
        cursor: pointer;
    }
    
`

export const ProductContainer = styled.div`

    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    justify-content: space-evenly;
    gap: 3em;
    margin-right: 2em;
    margin-left: 2em;

    
    @media (min-width: 1500px) {
        grid-template-columns: auto auto auto auto;
    }

`