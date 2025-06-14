import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './section/Header/Header'
import Hero from './section/Hero/Hero'
import Campain from './section/Campain/Campain'
import Service from './section/Description/Service'
import Quote from './section/Quote/Quote'
import Pricing from './section/Pricing/Pricing'
import Faq from './section/FAQ/Faq'
import Trial from './section/Trial/Trial'
import Footer from './section/Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero/>
    <Campain/>
    <Service/>
    <Quote/>
    <Pricing/>
    <Faq/>
    <Trial/>
    <Footer/>
  </StrictMode>,
)
