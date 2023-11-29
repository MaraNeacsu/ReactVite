import React from 'react'
import img_serrve from '../assets/images/serrve.svg'
import img_services from '../assets/images/services.svg'

const Services = () => {
  return (
    <div className="container-services">
    <div className="content-services">
        <div className="image-services">
            <img  className="serve"src={img_serrve} alt=""/>
        </div>
        <h2>We Provide The Best Service For Consulting</h2>
        <div className="column-services">
            <div className="card">
                <i className="fa-light fa-horizontal-rule"></i>
                <h5>Business Advice</h5>
                <div className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam
                    possimus.</div>
                <i className="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div className="card-business">
                <i className="fa-light fa-horizontal-rule"></i>
                <h5>Startup Business</h5>
                <div className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam
                    possimus.</div>
                <i className="fa-thin fa-circle-arrow-right"></i>
            </div>
            <div className="card">
                <i className="fa-light fa-horizontal-rule"></i>
                <h5>Financial Advice</h5>
                <div className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam
                    possimus.</div>
                <i className="fa-solid fa-circle-arrow-right"></i>
            </div>
            <div className="card">
                <i className="fa-light fa-horizontal-rule"></i>
                <h5>Risk Management</h5>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                <i className="fa-solid fa-circle-arrow-right"></i>
            </div>
        </div>
        
        <img className="services" src={img_services} alt=""/>
    </div>
</div>
  )
}

export default Services