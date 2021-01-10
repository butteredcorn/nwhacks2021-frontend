import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import styled from "styled-components"

import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, MainHeading, SubHeading, Text } from '../css/main'

const QrSectionContainer = styled(SectionContainer)`
    display: grid;
    padding: 40px;
`

const QrMainHeading = styled(MainHeading)`
    justify-self: center;
`

const QrSubHeading = styled(SubHeading)`
    justify-self: center;
`

const QrGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem 0;
`

const QrContainer = styled.div`
    display: grid;
    justify-items: center;
    p {
        margin: 0;
    }
`

function QRCodes({}) {

    const location = useLocation()
    const restaurant = location.state

    useEffect(() => {
        console.log(restaurant)
        console.log(restaurant.table_qr_codes)
    },[])

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
                            <Text>Table {index + 1}</Text>
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