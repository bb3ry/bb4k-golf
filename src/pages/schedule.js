import * as React from "react"
import Layout from "../components/layout"
import Schedule from '../components/Schedule'
import Aboutus from "../components/Aboutus"
export default function Component() {
  return (
    <Layout>
      <br />
      <Schedule heading="Schedule" />
      <Aboutus />
    </Layout>
  )
}