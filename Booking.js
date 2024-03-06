import axios from 'axios';
import React, { useState } from 'react';

const Booking = () => {

    const initialValues = { cname:"",phone_no:"",service:"",service_date:"",email:"" }
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
            fdata:formValues
           
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

            {/* Page Header Start  */}
            <div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(img/carousel-bg-1.jpg)"}}>
                <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Booking</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Booking</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Page Header End  */}

            {/* Service Start  */}
            {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Quality Servicing</h5>
                                    <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                                    <a className="text-secondary border-bottom" href="/">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="d-flex bg-light py-5 px-4">
                                <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Expert Workers</h5>
                                    <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                                    <a className="text-secondary border-bottom" href="/">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="d-flex py-5 px-4">
                                <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                                <div className="ps-4">
                                    <h5 className="mb-3">Modern Equipment</h5>
                                    <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                                    <a className="text-secondary border-bottom" href="/">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Service End  */}

            {/* Booking Start  */}
            <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6 py-5">
                            <div className="py-5">
                                <h1 className="text-white mb-4"> Multi Brand Car Care Specialists </h1>
                                <p className="text-white mb-0" style={{textAlign:"justify"}}> We do take care of our customer's Vehicle no matter what brand it is, so do feel free to trust us.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                                <h1 className="text-white mb-4">Book For A Service</h1>
                                <form onSubmit={FormFeedback}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" name="cname" value={formValues.cname} onChange={handleChange} className="form-control border-0" placeholder="Your Name" style={{height: "55px"}} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="integer" name="phone_no" value={formValues.phone_no} onChange={handleChange} className="form-control border-0" placeholder="Your PhoneNo" style={{height: "55px"}} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select className="form-select border-0" name="service" value={formValues.service} onChange={handleChange} style={{height: "55px"}}>
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
                                                    className="form-control border-0 datetimepicker-input" style={{height: "55px"}} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <input type="email" name="email" value={formValues.email} onChange={handleChange} className="form-control border-0" placeholder="Your Email id" style={{height: "55px"}} />
                                        </div>
                                        {/* <div className="col-12">
                                            <input type="text" name="message" value={formValues.message} onChange={handleChange} className="form-control border-0" placeholder="Special Request" style={{height: "60px"}} />
                                        </div> */}
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
            {/* Booking End  */}

            {/* Call To Action Start  */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-8 col-md-6">
                            <h6 className="text-primary text-uppercase">Call To Action</h6>
                            <h1 className="mb-4">Have Any Pre Booking Question?</h1>
                            <p className="mb-0">Do feel free to contact us for any queries...</p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-primary d-flex flex-column justify-content-center text-center h-100 p-4">
                                <h3 className="text-white mb-4"><i className="fa fa-phone-alt me-3"></i>+9197403 05067</h3>
                                <a href="/" className="btn btn-secondary py-3 px-5">Contact Us<i className="fa fa-arrow-right ms-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Call To Action End  */}

            {/* Back to Top  */}
            <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

        </div>
    )
}

export default Booking
