import React from 'react'
import Head from 'next/head'

import Logo from '../assets/logo.svg'
import { Container } from '../styles/pages/Home'

const Register: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>App</title>
      </Head>

      <Logo />
      <h3>App Next + React (Register)</h3>

      <footer></footer>
    </Container>
  )
}

export default Register
