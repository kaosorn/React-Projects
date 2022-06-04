import React from 'react'
import Nav from './Navbar'
import { useState } from 'react'
import { fabric } from 'fabric'
import { ShirtBackground, DesignOptions } from './styles/Design.styled'

const Design = () => {

  


  let canvas = new fabric.Canvas('tshirt-canvas')

  
  
  canvas.backgroundColor = 'yellow'

  return (
    <>
        <Nav />
        

        
        <ShirtBackground>
        <div className="tshirt-div">
          <img alt=" " src="images/tshirt2.png" />
          <div className="drawing-area">
            <div className="canvas-container">
              <canvas className="canvas" width="250" height="430"></canvas>
            </div>
          </div>
        </div>

        </ShirtBackground>
        
        
        
        <DesignOptions>
        <label for="tshirt-customimg">Upload your design:</label>
        <input type="file" id="tshirt-customimg" onChange={(event) => {
          console.log(event.target.files[0])
          let customImg = event.target.files[0]
          let imgElement = new fabric.Image(customImg, {
            left: 0,
            top: 0,
            width: 300,
            height: 300
          })

          canvas.add(imgElement)
        }} />
        </DesignOptions>
        {/* <DesignOptions>

        <div className="hook-display">
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);

          setSelectedImage(event.target.files[0]);
          let img = new fabric.Image(selectedImage)
          canvas.add(img)
          canvas.renderAll()
        }}
      />
    </div>
    </DesignOptions> */}
        
    </>
  )
}

export default Design