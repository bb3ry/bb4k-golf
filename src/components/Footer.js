import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>

                <FooterDesc>
                    <h1>Building Blocks for Kids</h1>
                    <p>Funding Needs. Improving Lives.</p>
                </FooterDesc>
                <br />

            <FooterLinksWrap>
                <FooterLinkItems>
                    <FooterLinkTitle>Links</FooterLinkTitle>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/about">About Us</FooterLink>
                    <FooterLink to="/course-map">Course Map</FooterLink>
                    <FooterLink to="/schedule">Schedule</FooterLink>
                    <FooterLink to="/register">Register</FooterLink>
                </FooterLinkItems>   <FooterLinkItems>
                    <FooterLinkTitle>Social</FooterLinkTitle>
                    <FooterLink to="//www.youtube.com/user/BuildingBlocks4Kids">Youtube</FooterLink>
                    <FooterLink to="//www.facebook.com/BB4Kids">Facebook</FooterLink>
                    <FooterLink to="//twitter.com/#!/BB4K">Twitter</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Visit our site</FooterLinkTitle>
                    <FooterLink to="https://bb4k.org/">Building Blocks for Kids</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrap>
        </FooterContainer>

    )
}
export default Footer

const FooterContainer = styled.div`
padding: 5rem calc((100vw - 1100px) / 2)
display:grid;
grid-template-columns: repeat(2, 1fr);
color:#000;
background: #FFF;

`

const FooterDesc = styled.div`
padding: 0 2rem;
width:100%;
text-align:center;


h1 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: #C63893;

       
}
p {
    margin-bottom: 2rem;
    color: #6660A9;
    font-weight: 700;
}
@media screen and (max-width: 400px){
    padding: 1rem;
}
`

const FooterLinksWrap = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);

@media screen and (max-width: 820px){
    grid-template-columns: repeat(2, 1fr);
}
`

const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem 2rem;

@media screen and (max-width: 400px){
    padding: 1rem;
}
`

const FooterLinkTitle = styled.h2`
font-size: 14px;
margin-bottom: 16px;
`

const FooterLink = styled(Link)`
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
color: #6660A9;

&:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
}
`

