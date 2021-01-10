import styled from "styled-components"

import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, MainHeading, SubHeading } from '../css/main'

function RestaurantMenu({}) {

    

    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
            <main>
                <SectionContainer>
                    <MainHeading>Menu Here</MainHeading>
                    <SubHeading></SubHeading>
                </SectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
        </div>
    )
}

export default RestaurantMenu;