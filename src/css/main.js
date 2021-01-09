import styled from "styled-components"

const PageContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
list-style: none;
overflow: auto;
background: ${props => props.theme.containerBackgroundColour};
`
const SectionContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
background: ${props => props.theme.backgroundColour};
min-height: 200px;
margin: 2rem;
border-radius: 15px;
`

const MainHeading = styled.div`
color: ${props => props.theme.mainHeading};
background: ${props => props.theme.backgroundColor};
padding: 0.5rem;
font-size: 3rem;
`
const SubHeading = styled.div`
color: ${props => props.theme.subHeading};
background: ${props => props.theme.backgroundColor}
padding: 0.5rem;
font-size: 2rem;
`



export { PageContainer, SectionContainer, MainHeading, SubHeading }