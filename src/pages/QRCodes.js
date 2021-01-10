import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import styled from "styled-components"

import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, MainHeading, SubHeading } from '../css/main'

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
    })

    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
            <main>
                <QrSectionContainer className="QRCode-Container">
                    <QrMainHeading>Here are your QR Codes!</QrMainHeading>
                    <QrSubHeading>Attach each one to your table and you are good to go</QrSubHeading>
                    <QrGrid>
                        {restaurant && Array.isArray(restaurant.table_qr_codes) && restaurant.table_qr_codes.map((qrcode, index) =>
                            <QrContainer key={index}>
                                <p>Table {index + 1}</p>
                                <img src={qrcode.qr} />
                            </QrContainer>
                        )}
                    </QrGrid>
                </QrSectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
        </div>
    )
}

export default QRCodes;