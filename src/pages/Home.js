import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import jsQR from 'jsqr'

import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, MainHeading, SubHeading, PrimaryButton } from '../css/main'

const Input = styled.input`
margin-top: 1rem;
margin-bottom: 1rem;
background: ${props => props.theme.buttonColour};
&:focus {
    outline: none;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);;
}&:hover {
    background: ${props => props.theme.uiBackgroundColour};
}
`


function Home({}) { 
    const [qrCode, setQRCode] = useState(null)
    const [imageData, setImageData] = useState(null)
    const [imageDimensions, setImageDimensions] = useState(null)

    const handleCapture = (e) => {
        // console.log(e.target)
        if (e.target.files) {
            if (e.target.files.length !== 0) {
                const reader = new FileReader()
                reader.onload = function() {
                    const image = new Image()
                    const blobUrl = URL.createObjectURL(file);
                    image.onload = function() {
                        setImageDimensions({ width: this.width, height: this.height })
                        URL.revokeObjectURL(blobUrl)
                    }
                    image.src = blobUrl

                    const imageData = new Uint8ClampedArray(reader.result)
                    // const binaryString = String.fromCharCode.apply(null, imageData)
                    setImageData(imageData)
                    // console.log(binaryString)

                    // handleRedirect(imageData)
                }

                const file = e.target.files[0];
                reader.readAsArrayBuffer(file)

                // setQRCode(blobUrl);

                //need to convert blobUrl to ImageData
                //handleRedirect(new new Uint8ClampedArray(new Blob(blobUrl)))
            }
          }
        }

    const handleScan = (e) => {
        // alert(qrCode)
        console.log(imageData)
        const { width, height } = imageDimensions
        console.log(width, height)
        // const code = jsQR(new ImageData(imageData, width), width, height)
        // console.log(code)
    }

    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
            <main>
                <SectionContainer>
                    <MainHeading>Welcome to Nom Nom Tech!</MainHeading>
                    <SubHeading>Scan a QR code to get started!</SubHeading>
                    <Input className="Camera-Function" accept='image/*' id='icon-button-file' type='file' capture='environment' onChange={handleCapture}/>
                    <PrimaryButton className="Primary-Button" onClick={handleScan}>Scan</PrimaryButton>
                </SectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
        </div>
    )
}

export default Home;