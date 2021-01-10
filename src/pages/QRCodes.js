import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import styled from "styled-components"

import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, MainHeading, SubHeading } from '../css/main'



function QRCodes({}) {

    const location = useLocation()
    const restaurant = location.state

    useEffect(() => {
        console.log(restaurant)
        console.log(restaurant.table_qr_codes)
    })

    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
            <main>
                <SectionContainer className="QRCode-Container">
                    <MainHeading>Here are your QR Codes!</MainHeading>
                    <SubHeading>Attach each one to your table and you are good to go</SubHeading>
                    {restaurant && Array.isArray(restaurant.table_qr_codes) && restaurant.table_qr_codes.map((qrcode, index) => 
                        <div key={index}>
                            <p>Table {index + 1}</p>
                            <img src={qrcode.qr} />
                        </div>
                    )}
                </SectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
        </div>
    )
}

export default QRCodes;