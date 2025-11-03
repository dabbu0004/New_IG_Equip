import React from 'react'
import FirstPage from './FirstPage'
import Contact from '../../Contact'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import FivePage from './FivePage'
import FaqSection from './FaqSection'
 
 
import Blog from './Blog'
import Gallery from '../gallery/Gallery'
import ClientPage from '../dual/ClientPage'
 

const HomeMain = () => {
  return (
    <div>
       
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
      <FourthPage/>
      <FivePage/>
      <ClientPage/>
      <Gallery/>
      <FaqSection/>
      {/* <Blog/> */}
      <Contact/>
    </div>
  )
}

export default HomeMain
