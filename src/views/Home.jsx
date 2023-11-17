import React from 'react'
import Header from '../components/Header'
import Showcase from '../components/Showcase'
import Features from '../components/Features'
import About from '../components/About'
import Services from '../components/Services'
import WhyUs from '../components/WhyUs'
import Project from '../components/Project'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'
import News from '../components/News'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <Header/>
    <Showcase/>
    <Features/>
    <About/>
    <Services/>
    <WhyUs/>
    <Project/>
    <Team/>
    <Testimonial/>
    <Blog/> 
    <News/>
    <Footer/>
    </>


  )
}

export default Home