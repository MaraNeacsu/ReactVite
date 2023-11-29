import React from 'react'
import img_Element from '../assets/images/Element.svg'
import img_hero from '../assets/images/hero.svg'

const Showcase = () => {
  return (
    <section className="showcase">
    <img className="Element" src={img_Element} alt=""/>


    <div className="container-hero">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>

            <a href="consulting.html" className="btn btn-lg btn-warning rounded-pill ">
                Get Consulting <i className="fas fa-arrow-up-right"></i>
            </a>
            <a href="services.html" className="btn btn-light btn-lg rounded-pill btn-outline-secondary">
                Learn More <i className="fas fa-arrow-up-right"></i>
            </a>
        </div>
        <a href="index.html"> <img className="hero" src={img_hero} alt=""/></a>
        
        

    </div>
</section>
  )
}

export default Showcase