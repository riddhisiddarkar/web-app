import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'

import indexStyles from './index.module.scss'

import WhoWeAre from '../images/WhoWeAre.inline.svg'
import WhatWeDo from '../images/WhatWeDo.inline.svg'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "index.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <BackgroundImage
        Tag="section"
        className={indexStyles.header}
        fluid={data.file.childImageSharp.fluid}
      // backgroundColor={`#131314`}
      // This backgroundColor is for overlay
      >
        <h1>FOSS Community GEC</h1>
        {/* <p>FOSS community GEC is a club started by a group of FOSS enthusiasts to nurture the open source community.</p> */}
      </BackgroundImage>


      <section className={indexStyles.imageWithText}>
        <div className={indexStyles.image}>
          <WhoWeAre />
        </div>
        <div className={indexStyles.text}>
          <h2>Who we are</h2>
          <p>FOSS community GEC is a club started by a group of FOSS enthusiasts to nurture the open source community in Goa College of Engineering and encourage students across Goa to contribute to open source software projects and adopt the FOSS philosophy.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quibusdam consectetur earum nobis vitae odit maiores repellat. Aliquam autem veritatis reiciendis aspernatur fuga repellat? Assumenda, maxime. Pariatur modi saepe blanditiis!</p>
        </div>
      </section>

      <section className={indexStyles.imageWithText}>
        <div className={indexStyles.text}>
          <h2>What we do</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quasi nulla commodi autem sit aliquam, rem ducimus dolor cumque quas voluptatem, beatae nihil corporis deleniti facilis harum nisi voluptatum quidem.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorem veritatis assumenda culpa quaerat perspiciatis neque pariatur ea exercitationem ipsam, tenetur reiciendis enim voluptate debitis deserunt voluptatibus aliquid aperiam quasi.</p>
        </div>
        <div className={indexStyles.image}>
          <WhatWeDo />
        </div>
      </section>
    </Layout >
  )
}

export default IndexPage
