import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello!</h1>
    <p>My name is Erica.</p>
    <p>This is my first Gatsby server, built to register for the FreeCodeCamp online Hackathon.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
