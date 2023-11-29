import React from 'react'
import img_women from '../assets/images/women.svg'
import img_EWlement from '../assets/images/Element.svg'
import img_quotes from '../assets/images/quotes.svg'

const About = () => {
  return (
    <div className="image-company">
                <img className="women" src={img_women} alt=""/>
                <img className="Element" src={img_EWlement} alt=""/>

                <div className="quotes">
                    <img  className="quotes"src={img_quotes} alt="quotes"/>
                </div>

                <div className="container-company">

                    <div className="content-company">
                        <div className="about-company">About Company </div>
                        <h4>We Are Business Consulting & Credit Repair Experts</h4>
                        <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis
                            quas
                            assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</div>
                        <div className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi
                            incidunt adipisci accusantium libero provident voluptate amet.</div>


                        
                        <div className="intro-video">
                            <a className="btn-black" href="learn-more.html">Learn More <i className="fas fa-arrow-up-right"></i></a>
                          <img className="video" src={img_} alt=""/> Intro Video 
                        </div>



                    </div>
                </div>
            </div>


  )
}

export default About