import styled from 'styled-components'

export const ShirtGallery = styled.div `
    display: grid;
    
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
    gap: 3em;
    margin-right: 2em;
    margin-left: 2em;
    img{
        object-fit: scale-down;
    }

    

    @media (max-width: 800px) {
        grid-template-columns: auto;
    }
`

