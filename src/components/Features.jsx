import React from 'react'
import img_logos from '../assets/images/Logos.svg'

const Features = () => {



  return (
    <div>
      <div className="logos">
        <a href="index.html"><img className='logo' src={img_logos} alt="" /></a>
        
      </div>

      <div className="features-container">
        <div className="tab-content">
          <div className="features"> Features</div>
          <h2>Our Accounting is trusted by thousands of companies</h2>
          <a className="btn-yellow" href="learn more.html">
            Learn More <i className="fas fa-arrow-up-right"></i>
          </a>
        </div>

        <div className="features-icons">
          <div className="column">
            <i className="fas fa-handshake"></i>
            <h3>Business Advice</h3>
            <div className="Rubrik">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="column">
            <i className="fas fa-lightbulb-on"></i>
            <h3>Startup Business</h3>
            <div className="Rubrik">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="column">
            <i className="far fa-building-columns"></i>
            <h3>Financial Advice</h3>
            <div className="Rubrik">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="column">
            <i className="far fa-box-dollar"></i>
            <h3>Risk Management</h3>
            <div className="Rubrik">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;


