import React from 'react'
import img_two from '../assets/images/two.svg'
import img_Bg from '../assets/images/Bg.svg'

const WhyUs = () => {
  return (
    <main>
    <div className="container-why">
    <div className="content-why">
        <div className="why">Why choose us</div>
        <h2 id="us">Why We Are the Best Business Consulting Agency</h2>
        <ul>
            <li>
                <div className="why-list-item">
                    <i className="fas fa-thumbs-up"></i>
                    <div>
                        <h5>Process Excellence</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="why-list-item">
                    <i className="fas fa-hexagon-image"></i>
                    <div>
                        <h5>Strategic Planning</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="why-list-item">
                    <i className="fas fa-scale-balanced"></i>
                    <div>
                        <h5>Experience Design</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="why-list-item">
                    <i className="fas fa-head-side-gear"></i>
                    <div>
                        <h5>Artificial Intelligence</h5>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>

<div className="two-women">
    <img className="two" src={img_two} alt=""/>
</div>

<div className="bg-img">
    <img className="bg-img" src={img_Bg} alt=""/>
</div>
</main>
  )
}


export default WhyUs