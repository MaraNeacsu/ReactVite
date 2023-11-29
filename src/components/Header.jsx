import React from 'react'
import img_black from '.././assets/images/black.svg'

const Header = () => {
  return (
   
        <header>
            <div className="container">

               <a href="index.html"><img className="black" src={img_black} alt="" /></a>

                <div className="w-100">
                    <div className="border-bottom d-flex flex-row">

                        <div className="d-flex flex-row">
                            <div className="p-3">
                                <i className="fa-solid fa-phone-volume"></i>
                                +46(8)12147050
                            </div>
                            <div className="p-3">
                                <i className="fa-regular fa-envelope"></i>
                                info@crito.com
                            </div>
                            <div className="p-3">
                                <i className="fa-solid fa-location-dot"></i>
                                Sveavägen 31, 111 34 STOCKHOLM
                            </div>

                        </div>

                        <div className="d-flex align-items-center ms-auto">
                            <a href="htpps://facebook.com" target="_blank"></a>
                            <i className="fa-brands fa-facebook p-1"></i>
                            <a href="htpps://twitter.com" target="_blank"></a> <i className="fa-brands fa-twitter p-1"></i>
                            <a href="htpps://instagram.com" target="_blank"></a> <i
                                className="fa-brands fa-instagram p-1"></i>
                            <a href="htpps://likedin.com" target="_blank"></a> <i className="fa-brands fa-linkedin p-1"></i>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <nav className="mainmenu navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Service</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">News</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Contact</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </nav>

                        <div className="login">
                            <button type="button" className="btn btn-warning rounded-pill">
                                Login
                                <i className="fas fa-arrow-up-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header