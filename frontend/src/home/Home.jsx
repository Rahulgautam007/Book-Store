import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Books from '../components/Books'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Books/>
      <Footer/>
    </>
  )
}

export default Home
