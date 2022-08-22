import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { GiGolfFlag } from "react-icons/gi"

const Coursemap = () => {
    const data = useStaticQuery(graphql`
query {
    contentfulGolfCourseMap {
      coursemap {
        gatsbyImageData
      }
      courseName
    }
  }
`)
    const image = getImage(data.contentfulGolfCourseMap.coursemap)
    return (
        <>
            <CourseBox>
                <Heading><GiGolfFlag color="#6660A9" /> Map of {data.contentfulGolfCourseMap.courseName}</Heading>
                <GatsbyImage image={image} alt={data.contentfulGolfCourseMap.courseName} />
            </CourseBox>
        </>

    )
}
export default Coursemap
const CourseBox = styled.div`
margin: 0 auto;
width:100%;
padding-left:10rem;
padding-right:10rem;
@media screen and (max-width: 960px){
    padding-left:5rem;
padding-right:5rem;
}
@media screen and (max-width: 600px){
    padding-left:2rem;
padding-right:2rem;
}
`
const Heading = styled.h1`
text-align: center;
font-size: clamp(1.5rem, 5vw, 2rem);
margin-bottom: 1rem;
padding: 1rem 1rem;
color: #6660A9;	 
`

