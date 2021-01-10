import styled from "styled-components"

import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, MainHeading, SubHeading } from '../css/main'

function Home({}) {

    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
            <main>
                <SectionContainer>
                    <MainHeading>Welcome to Nom Nom Tech!</MainHeading>
                    <SubHeading>Scan a QR code here!</SubHeading>
                </SectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
        </div>
    )
}

export default Home;