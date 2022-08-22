import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { AiFillInfoCircle } from 'react-icons/ai'

const Aboutus = () => {
    const aboutData = useStaticQuery(graphql`
    query {
        allContentfulAboutUsBlurb {
          edges {
            node {
              title
              description
            }
          }
        }
      }
    `)
    function getAbout(aboutData) {
        const aboutArray = []

        aboutData.allContentfulAboutUsBlurb.edges.forEach((item, index) => {
            aboutArray.push(
                <AboutBox key={index}>
                    <Title><AiFillInfoCircle color="#6660A9" /> {item.node.title}</Title>
                    <Description>{item.node.description}</Description>
                </AboutBox>
            )

        })
        return aboutArray
    }
    return (
        <AboutContainer>
            <Heading>About Us</Heading>
            <Wrapper>
                {getAbout(aboutData)}
            </Wrapper>
        </AboutContainer>
    )
}

export default Aboutus

const AboutContainer = styled.div`
width: 100%;
background: #fff;
color: #000;
display: flex;
flex-direction: column;
justify-content: center;
padding: 4rem calc((11vw - 1300px) / 2);
`
const Heading = styled.h1`
text-align: center;
font-size: clamp(1.5rem, 5vw, 2rem);
margin-bottom: 1rem;
padding: 0 2rem;
color: #6660A9;	 
`
const Wrapper = styled.div`
display:grid;
grid-template-columns: repeat(4, 1fr);
grid-gap:10px;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;  
}
@media screen and (max-width: 500px){
    grid-template-columns: 1fr;  
}
`
const AboutBox = styled.div`
height:100%;
width:100%;
padding:2rem;
`
const Title = styled.p`
font-size: clamp(1rem, 2.5vw, 1.4rem);
font-weight:bold;
`
const Description = styled.p`
font-size: clamp(1rem, 2.5vw, 1.2rem);
`