//import React from 'react';
import { Link } from 'react-router-dom';
import Slide1 from '../img/carousel-bg-1.jpg';
import Slide2 from '../img/carousel-1.png';
import Slide3 from '../img/carousel-bg-2.jpg';
import Slide4 from '../img/carousel-2.png';
import Slide5 from '../img/about.jpg';
import Slide6 from '../img/service-1.jpg';
import Slide7 from '../img/service-2.jpg';
import Slide8 from '../img/service-3.jpg';
import Slide9 from '../img/service-4.jpg';
import Ser5 from '../img/service-5.png';
import axios from 'axios';
import React, { useState } from 'react';
// import Slide10 from '../img/team-1.jpg';
// import Slide11 from '../img/team-2.jpg';
// import Slide12 from '../img/team-3.jpg';
// import Slide13 from '../img/team-4.jpg';
// import Slide14 from '../img/testimonial-1.jpg';
// import Slide15 from '../img/testimonial-2.jpg';
// import Slide16 from '../img/testimonial-3.jpg';
// import Slide17 from '../img/testimonial-4.jpg';

const Home = () => {
    const initialValues = { cname: "", phone_no: "", service: "", service_date: "", message: "" }
    const [formValues, setFormvalues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormvalues({ ...formValues, [name]: value });
        console.log(formValues.cname)
    }

    const FormFeedback = (e) => {
        e.preventDefault();
        console.log(formValues)
        axios.post("http://localhost:3001/booking", {
            fdata: formValues

            //uid:uid
        }).then((response) => {
            console.log(response);
            alert("Your booking request is accepted")
            //window.location="http://localhost:3000/userhome"
        })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>

            {/* Spinner Start */}
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-border text-primary" style={{ width: "2rem", height: "2rem" }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            {/* Spinner End */}

            {/* Carousel Start */}
            <div className="container-fluid p-0 mb-5">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={Slide1} alt="not found" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-white text-uppercase mb-3 animated slideInDown">Car Servicing</h6>
                                            <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Repair Service Center</h1>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src={Slide2} alt="not found" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={Slide3} alt="not found" />
                            <div className="carousel-caption d-flex align-items-center">
                                <div className="container">
                                    <div className="row align-items-center justify-content-center justify-content-lg-start">
                                        <div className="col-10 col-lg-7 text-center text-lg-start">
                                            <h6 className="text-white text-uppercase mb-3 animated slideInDown">Car Servicing</h6>
                                            <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Wash Service Center</h1>
                                        </div>
                                        <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                            <img className="img-fluid" src={Slide4} alt="not found" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Carousel End */}

            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Quality Servicing</h5>
                                    <p>We beleive in the quality rather than quantitative service. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="d-flex bg-light py-5 px-4">
                                <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Expert Workers</h5>
                                    <p>Your vehicle is in our expert Technicians hand.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Modern Equipment</h5>
                                    <p>Get a premium service for your vehicle with the Modern Technology.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}

            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 pt-4" style={{ minHeight: "400px" }}>
                            <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                                <img className="position-relative img-fluid w-80 h-80" src={Slide5} style={{ objectFit: "cover" }} alt="not found" />
                                <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{ background: "rgba(0, 0, 0, .08)" }}>
                                    <h1 className="display-4 text-white mb-0">20 <span className="fs-4">Years</span></h1>
                                    <h4 className="text-white">Experience</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h6 className="text-primary text-uppercase">About Us</h6>
                            <h1 className="mb-4"><span className="text-primary">    Automotive Center   </span> "MultiBrand Car Care Specialists in Hubballi"</h1>
                            <p className="mb-4" style={{ textAlign: "justify" }}>We are automobile repair and maintenance experts. we handle all kinds of cars and brands. We take services with customer satisfaction as our challenge. Our services are Vehicle Scanning | Mechanical Repairs | Electric Repairs | A/C Repairs | Body Repairs | Hot Coat Painting | 3D Wheel Alignment | Car & Bike Wash | Foam Wash | Wax Polish | Interior Cleaning</p>
                            <div className="row g-4 mb-3 pb-3">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                                    <div className="d-flex">
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: "45px", height: "45px" }}>
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
                                        <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: "45px", height: "45px" }}>
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
            {/* About End */}

            {/* Fact Start */}
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
            {/* Fact End */}

            {/* Service Start */}
            <div className="container-xxl service py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-primary text-uppercase">Our Services</h6>
                        <h1 className="mb-5">Explore Our Services</h1>
                    </div>
                    <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="col-lg-4">
                            <div className="nav w-100 nav-pills me-4">
                                <button className="nav-link w-100 d-flex align-items-center text-start p-3 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                    <i className="fa fa-car-side fa-2x me-3"></i>
                                    <h4 className="m-0">Diagnostic Test</h4>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-3 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                    <i className="fa fa-car fa-2x me-3"></i>
                                    <h4 className="m-0">Engine Servicing</h4>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-3 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                    <i className="fa fa-cog fa-2x me-3"></i>
                                    <h4 className="m-0">Tires Replacement</h4>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-3 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                    <i className="fa fa-oil-can fa-2x me-3"></i>
                                    <h4 className="m-0">Oil Changing</h4>
                                </button>
                                <button className="nav-link w-100 d-flex align-items-center text-start p-3 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-5" type="button">
                                    <i className="fa fa-water fa-2x me-3"></i>
                                    <h4 className="m-0">Car Washing</h4>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content w-100">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: "350px" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-relative img-fluid w-100 h-100" src={Slide6}
                                                    style={{ objectFit: "cover" }} alt="not found" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <h3 className="mb-3">20  Years Of Experience In Auto Servicing</h3>
                                            <p className="mb-4">This will help to diagnose the problems in the vehicle and helps our Technicians solve them with the help of the modern tools and satisfy the customer needs.</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                            <button className="btn btn-primary py-2 px-5 mt-3">₹ 200</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: "350px" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-relative img-fluid w-100 h-100" src={Slide7}
                                                    style={{ objectFit: "cover" }} alt="not found" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <h3 className="mb-3">20 Years Of Experience In Auto Servicing</h3>
                                            <p className="mb-4">With the help of the modern tools and machines the Technicians resolve the defects if any are present in the engine and satisfy the customer.</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                            <button className="btn btn-primary py-2 px-5 mt-3">₹ 250</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-3">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: "350px" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-relative img-fluid w-100 h-100" src={Slide8}
                                                    style={{ objectFit: "cover" }} alt="not found" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <h3 className="mb-3">20 Years Of Experience In Auto Servicing</h3>
                                            <p className="mb-4">We are pleased to let our customer know about our modern technology used at our service center to satisfy the customer desires.</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                            <button className="btn btn-primary py-2 px-5 mt-3">₹ 300</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-4">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{ minHeight: "350px" }}>
                                            <div className="position-relative h-100">
                                                <img className="position-relative img-fluid w-100 h-100" src={Slide9}
                                                    style={{ objectFit: "cover" }} alt="not found" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <h3 className="mb-3">20 Years Of Experience In Auto Servicing</h3>
                                            <p className="mb-4">We let know the customer about their engine oils when they are to be replaced, and we do take care of the customer considerations.</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                            <button className="btn btn-primary py-2 px-5 mt-3">₹ 500</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-5">
                                    <div className="row g-4">
                                        <div className="col-md-6" style={{Height: "250px"}}>
                                            <div className="position-relative h-100">
                                                <img className="position-relative img-fluid w-100 h-100" src={Ser5}
                                                    style={{objectFit: "cover"}} alt="not found" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <h3 className="mb-3">20  Years Of Experience In Auto Servicing</h3>
                                            <p className="mb-4">This will shine your vehicle as a brand new vehicle with the smart foaming soap wash and with the water jet spray that will meet the customer's desire with deep cleaning of vehicle.</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Quality Servicing</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Expert Workers</p>
                                            <p><i className="fa fa-check text-success me-3"></i>Modern Equipment</p>
                                            <button className="btn btn-primary py-2 px-5 mt-3">₹ 200</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}

            {/* Booking Start */}
            <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6 py-5">
                            <div className="py-5">
                                <h1 className="text-white mb-4"> Multi Brand Car Care Specialists </h1>
                                <p className="text-white mb-0" style={{ textAlign: "justify" }}> We do take care of our customer's Vehicle no matter what brand it is, so do feel free to trust us.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                                <h1 className="text-white mb-4">Book For A Service</h1>
                                <form onSubmit={FormFeedback}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" name="cname" value={formValues.cname} onChange={handleChange} className="form-control border-0" placeholder="Your Name" style={{ height: "55px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="integer" name="phone_no" value={formValues.phone_no} onChange={handleChange} className="form-control border-0" placeholder="Your PhoneNo" style={{ height: "55px" }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select border-0" name="service" value={formValues.service} onChange={handleChange} style={{ height: "55px" }}>
                                                <option selected>Select A Service</option>
                                                <option value="diagnostic test">Diagnostic Test</option>
                                                <option value="engine servicing">Engine Servicing</option>
                                                <option value="tires replacement">Tires Replacement</option>
                                                <option value="oil changing">Oil Changing</option>
                                                <option value="car washing">Car Washing</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="date">
                                                <input type="date" name="service_date" value={formValues.service_date} onChange={handleChange}
                                                    className="form-control border-0 datetimepicker-input" style={{ height: "55px" }} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control border-0" name="message" value={formValues.message} onChange={handleChange} placeholder="Special Request"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Booking End */}

            {/* Team Start */}
            {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-primary text-uppercase">Our Technicians</h6>
                        <h1 className="mb-5">Our Expert Technicians</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid" src={Slide10} alt="not found" />
                                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                        <Link className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></Link>
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
                                    <img className="img-fluid" src={Slide11} alt="not found" />
                                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                        <Link className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></Link>
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
                                    <img className="img-fluid" src={Slide12} alt="not found" />
                                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                        <Link className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></Link>
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
                                    <img className="img-fluid" src={Slide13} alt="not found" />
                                    <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                        <Link className="btn btn-square mx-1" href="/"><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-square mx-1" href="/"><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-square mx-1" href="/"><i className="fab fa-instagram"></i></Link>
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
            {/* Team End */}

            {/* Testimonial Start */}
            {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="text-primary text-uppercase">Testimonial</h6>
                        <h1 className="mb-5">Our Clients Say!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel position-relative">
                        <div className="testimonial-item text-center">
                            <img className="bg-light rounded-circle p-2 mx-auto mb-3" alt="not found" src={Slide14} style={{width: "80px", height: "80px"}} />
                            <h5 className="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="bg-light rounded-circle p-2 mx-auto mb-3" alt="not found" src={Slide15} style={{width: "80px", height: "80px"}} />
                            <h5 className="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="bg-light rounded-circle p-2 mx-auto mb-3" alt="not found" src={Slide16} style={{width: "80px", height: "80px"}}/>
                            <h5 className="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="bg-light rounded-circle p-2 mx-auto mb-3" alt="not found" src={Slide17} style={{width: "80px", height: "80px"}} />
                            <h5 className="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div className="testimonial-text bg-light text-center p-4">
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Testimonial End */}

            {/* Footer Start */}

            {/* Footer End */}

            {/* Back to Top */}
            <Link href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>

        </div>
    )
}

export default Home
