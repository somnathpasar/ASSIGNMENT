import React from 'react';
import Ser1 from '../img/service-1.jpg';
import Ser2 from '../img/service-2.jpg';
import Ser3 from '../img/service-3.jpg';
import Ser4 from '../img/service-4.jpg';
import Ser5 from '../img/service-5.png';
// import Ser6 from '../img/testimonial-2.jpg';
// import Ser7 from '../img/testimonial-3.jpg';
// import Ser8 from '../img/testimonial-4.jpg';


const Services = () => {
    return (
        <div>
            {/* Spinner Start */}
            <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" style={{ width: "2rem", height: "2rem" }} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            {/* Spinner End */}

            {/* Page Header Start */}
            <div class="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(img/carousel-bg-2.jpg)" }}>
                <div class="container-fluid page-header-inner py-5">
                    <div class="container text-center">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Services</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center text-uppercase">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">Services</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Page Header End */}


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
                                        <div className="col-md-6" style={{minHeight: "350px"}}>
                                            <div className="position-relative h-100">
                                                <img className="position-relative img-fluid w-100 h-100" src={Ser1}
                                                    style={{objectFit: "cover"}} alt="not found" />
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
                                        <div className="col-md-6" style={{minHeight: "350px"}}>
                                            <div className="position-relative h-100">
                                                <img className="position-relative img-fluid w-100 h-100" src={Ser2}
                                                    style={{objectFit: "cover"}} alt="not found" />
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
                                        <div className="col-md-6" style={{minHeight: "350px"}}>
                                            <div className="position-relative h-100">
                                                <img className="position-relative img-fluid w-100 h-100" src={Ser3}
                                                    style={{objectFit: "cover"}} alt="not found" />
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
                                        <div className="col-md-6" style={{minHeight: "350px"}}>
                                            <div className="position-relative h-100">
                                                <img className="position-relative img-fluid w-100 h-100" src={Ser4}
                                                    style={{objectFit: "cover"}} alt="not found" />
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
            {/* <div class="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-6 py-5">
                            <div class="py-5">
                                <h1 class="text-white mb-4">Certified and Award Winning Car Repair Service Provider</h1>
                                <p class="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                                <h1 class="text-white mb-4">Book For A Service</h1>
                                <form>
                                    <div class="row g-3">
                                        <div class="col-12 col-sm-6">
                                            <input type="text" class="form-control border-0" placeholder="Your Name" style={{ height: "55px" }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <input type="email" class="form-control border-0" placeholder="Your Email" style={{ height: "55px" }} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <select class="form-select border-0" style={{ height: "55px" }}>
                                                <option selected>Select A Service</option>
                                                <option value="1">Service 1</option>
                                                <option value="2">Service 2</option>
                                                <option value="3">Service 3</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <div class="date" id="date1" data-target-input="nearest">
                                                <input type="text"
                                                    class="form-control border-0 datetimepicker-input"
                                                    placeholder="Service Date" data-target="#date1" data-toggle="datetimepicker" style={{ height: "55px" }} />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <textarea class="form-control border-0" placeholder="Special Request"></textarea>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-secondary w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Booking End */}


            {/* Testimonial Start */}
            {/* <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="text-center">
                        <h6 class="text-primary text-uppercase"> Testimonial </h6>
                        <h1 class="mb-5">Our Clients Say!</h1>
                    </div>
                    <div class="owl-carousel testimonial-carousel position-relative">
                        <div class="testimonial-item text-center">
                            <img class="bg-light rounded-circle p-2 mx-auto mb-3" src={Ser5} style={{ width: "80px", height: "80px" }} alt="not found"/>
                            <h5 class="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div class="testimonial-text bg-light text-center p-4">
                                <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                        <div class="testimonial-item text-center">
                            <img class="bg-light rounded-circle p-2 mx-auto mb-3" src={Ser6} style={{ width: "80px", height: "80px" }} alt="not found" />
                            <h5 class="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div class="testimonial-text bg-light text-center p-4">
                                <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                        <div class="testimonial-item text-center">
                            <img class="bg-light rounded-circle p-2 mx-auto mb-3" src={Ser7} style={{ width: "80px", height: "80px" }} alt="not found" />
                            <h5 class="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div class="testimonial-text bg-light text-center p-4">
                                <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                        <div class="testimonial-item text-center">
                            <img class="bg-light rounded-circle p-2 mx-auto mb-3" src={Ser8} style={{ width: "80px", height: "80px" }} alt="not found"/>
                            <h5 class="mb-0">Client Name</h5>
                            <p>Profession</p>
                            <div class="testimonial-text bg-light text-center p-4">
                                <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Testimonial End */}

            {/* Back to Top */}
            <a href="/" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
        </div>
    )
}

export default Services
