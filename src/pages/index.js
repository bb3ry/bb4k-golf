import * as React from "react"
import Layout from '../components/layout'
import { graphql } from "gatsby"
import Hero from '../components/hero'
import GoodieBag from '../components/GoodieBag'
import Schedule from '../components/Schedule'
import { Seo } from "../components/Seo"
import Email from '../components/Email'
import Aboutus from '../components/Aboutus'
import Coursemap from '../components/Coursemap'


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <GoodieBag heading="Complimentary Goodie Bags" subHeading="Everyone who participates will receive these awesome gifts!" />
      <Schedule heading="Schedule" />
      <Coursemap />
      <Aboutus />
      <Email />
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query {
    contentfulHero {
          heroimage {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          eventDescription
          eventDate
        }
    site {
      siteMetadata {
        title
        tagline
        eventdate
        course
      }
    }
  }
`
export const Head = () => <Seo />
