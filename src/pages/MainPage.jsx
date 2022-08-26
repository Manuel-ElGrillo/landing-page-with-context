import React, { useContext } from 'react'
import Header from '../components/Header'
import Services from '../components/Services'
import CTA from '../components/CTA'
import Testimonials from '../components/Testimonials'
import Why from '../components/Why'
import Footer from '../components/Footer'
import { LangContext } from '../context/LangContext'

const MainPage = () => {

  const dataFromLangProvider = useContext(LangContext); //Not necessary, hook used just for A / B testing :3
  
  return (
    <div> 

        <Header dataFromLangProvider={dataFromLangProvider}/>

        <Services />

        <CTA />

        <Testimonials />

        <Why />

        <Footer />

    </div>
  )
}

export default MainPage