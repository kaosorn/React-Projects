import styled from 'styled-components'

export const ShirtBackground = styled.div`

    .container{
        
    }
    .tshirt-div{
        display: flex;
        width: 100%;
        
        justify-content: center;
        
        overflow-x: hidden;
        

        .drawing-area{
            position: absolute;
            
            z-index: 10;
            align-self: center;
            margin-top: 4em;

            canvas{
                z-index: 20;
            }
        }
        
    }

`

export const DesignOptions = styled.div`
    
    padding: 2em;
    display: flex;
    justify-content: center;
    
`

