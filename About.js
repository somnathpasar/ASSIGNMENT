import React from 'react';
import Abt1 from '../img/about.jpg';
// import Abt2 from '../img/team-1.jpg';
// import Abt3 from '../img/team-2.jpg';
// import Abt4 from '../img/team-3.jpg';
// import Abt5 from '../img/team-4.jpg';

const About = () => {
    return (
        <div>
            {/* Spinner Start */}
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: "2rem", height: "2rem" }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            {/* Spinner End */}

            {/* Page Header Start  */}
            <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/carousel-bg-1.jpg)"}}>
                <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Page Header End  */}

            {/* About Start  */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 pt-4" style={{minHeight: "400px"}}>
                            <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                                <img className="position-relative img-fluid w-80 h-80" src={Abt1} style={{objectFit: "cover"}} alt="not found" />
                                <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{background: "rgba(0, 0, 0, .08)"}}>
                                    <h1 className="display-4 text-white mb-0">20 <span className="fs-4">Years</span></h1>
                                    <h4 className="text-white">Experience</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="text-primary text-uppercase">About Us</h6>
                            <h1 className="mb-4"><span className="text-primary">    Automotive Center   </span>"MultiBrand Car Care Specialists in Hubballi"</h1>
                            <p className="mb-4" style={{textAlign:"justify"}}>We are automobile repair and maintenance experts. we handle all kinds of cars and brands. We take services with customer satisfaction as our challenge. Our services are Vehicle Scanning | Mechanical Repairs | Electric Repairs | A/C Repairs | Body Repairs | Hot Coat Painting | 3D Wheel Alignment | Car & Bike Wash | Foam Wash | Wax Polish | Interior Cleaning</p>
                            <div className="row g-4 mb-3 pb-3">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: "45px", height: "45px"}}>
                                            <span className="fw-bold text-secondary">01</span>
                                        </div>
                                        <div className="ps-3 text-start">
                                            <h6>Professional & Expert</h6>
                                            <span>Your vehicle is in our hands.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: "45px", height: "45px"}}>
                                            <span className="fw-bold text-secondary">02</span>
                                        </div>
                                        <div className="ps-3 text-start">
                                            <h6>Quality Servicing Center</h6>
                                            <span>We believe in Quality rather than in Quantity.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End  */}

            {/* Fact Start  */}
            {/* <div className="container-fluid fact bg-dark my-5 py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-check fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                            <p className="text-white mb-0">Years Experience</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                            <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                            <p className="text-white mb-0">Expert Technicians</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-users fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                            <p className="text-white mb-0">Satisfied Clients</p>
                        </div>
                        <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                            <i className="fa fa-car fa-2x text-white mb-3"></i>
                            <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                            <p className="text-white mb-0">Compleate Projects</p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Fact End  */}

            {/* Team Start  */}
            {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-primary text-uppercase"> Our Technicians </h6>
                        <h1 className="mb-5">Our Expert Technicians</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={Abt2} alt="not found" />
                                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={Abt3} alt="not found" />
                                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={Abt4} alt="not found" />
                                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={Abt5} alt="not found" />
                                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="fw-bold mb-0">Full Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Team End  */}

            {/* Back to Top  */}
            <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

        </div>
    )
}

export default About
