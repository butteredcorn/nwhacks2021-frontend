import styled from "styled-components"

const PageContainer = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
list-style: none;
overflow: auto;
background: ${props => props.theme.containerBackgroundColour};
`
const SectionContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
background: ${props => props.theme.backgroundColour};
min-height: 200px;
margin: 2rem;
border-radius: 15px;
box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
`

const FormContainer = styled.form`
display: flex;
flex-direction: column;
width: 100%;
justify-content: space-around;
align-items: center;
background: ${props => props.theme.backgroundColour};
margin: 2rem;
border-radius: 15px;
box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.3);
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

const PrimaryButton = styled.button`
color: ${props => props.theme.uiColour};
background: ${props => props.theme.uiBackgroundColour}
padding-top: 1rem;
padding-left: 1rem;
padding-right: 1rem;
padding-botton: 1rem;
font-size: 1.2rem;
border: none;
font-weight: 500;
&:focus {
    outline: none;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);;
}
` 

const NavbarButton = styled.button`
color: ${props => props.theme.textColour};
background: ${props => props.theme.uiBackgroundColour}
font-size: 1rem;
border: none;
font-weight: 500;
&:focus {
    outline: none;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);;
}
` 

const TextInput = styled.input`
border: 1px solid black;
border-radius: 25px;
padding-left: 1rem;
&:focus {
    outline: none;
    box-shadow: none;
}
`

const PasswordInput = styled(TextInput).attrs({
    type: "password",
  })`
`



export { PageContainer, FormContainer, SectionContainer, MainHeading, SubHeading, PrimaryButton, NavbarButton, TextInput, PasswordInput }