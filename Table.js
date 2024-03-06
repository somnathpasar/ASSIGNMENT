import React from 'react';
import Adm1 from '../imgs/user.png';
import { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
    const [FeedbackData, setFeedbackData] = useState([])
    useEffect(() => {
        getFeedback();
    });

    const getFeedback = async () => {
        const result = await axios.get(`http://localhost:3001/viewbooking`);
        setFeedbackData(result.data);
        console.log(result.data);
    };

    // const confirmOrder = id => {
    //     alert(id)
    //     axios.post(`http://localhost:3001/orderconfirm/${id}`)
    //         .then(response => {
    //             getFeedback();

    //         });
    // }

    return (
        <div>
            <div class="container-xxl position-relative bg-white d-flex">
                {/* Spinner Start */}
                <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div class="spinner-border text-primary" style={{ width: "2rem", height: "2rem", role: "status" }}>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                {/* Spinner End */}


                {/* Sidebar Start */}
                <div className="sidebar pe-4 pb-3">
                    <nav className="navbar bg-light navbar-light">
                        <a href="/adminhome" className="navbar-brand mx-4 mb-3">
                            <h2 className="/" style={{ color: "#A50C0C" }}>Admin Dashboard</h2>
                        </a>
                        <div className="d-flex align-items-center ms-4 mb-4">
                            <div className="position-relative">
                                <img className="rounded-circle" src={Adm1} alt="not found" style={{ width: "40px", height: "40px" }} />
                                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                            </div>
                            <div className="ms-3">
                                <h6 className="/">Fuad K</h6>
                                <span>Admin</span>
                            </div>
                        </div>
                        <div className="navbar-nav w-100">
                            <a href="/adminhome" className="nav-item nav-link text-start px-4"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                            {/* <div className="nav-item dropdown">
                                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Elements</a>
                                <div className="dropdown-menu bg-transparent border-0">
                                    <a href="button.html" className="dropdown-item">Buttons</a>
                                    <a href="typography.html" className="dropdown-item">Typography</a>
                                    <a href="element.html" className="dropdown-item">Other Elements</a>
                                </div>
                            </div> */}
                            {/* <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Widgets</a> */}
                            {/* <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Forms</a> */}
                            <a href="/table" className="text-start px-4 nav-item nav-link active"><i className="fa fa-table me-2"></i>Tables</a>
                            {/* <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a> */}
                            {/* <div className="nav-item dropdown">
                                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
                                <div className="dropdown-menu bg-transparent border-0">
                                    <a href="signin.html" className="dropdown-item">Sign In</a>
                                    <a href="signup.html" className="dropdown-item">Sign Up</a>
                                    <a href="404.html" className="dropdown-item">404 Error</a>
                                    <a href="blank.html" className="dropdown-item">Blank Page</a>
                                </div>
                            </div> */}
                        </div>
                    </nav>
                </div>
                {/* Sidebar End */}


                {/* Content Start */}
                <div className="content">
                    {/* Navbar Start */}

                    {/* Navbar End */}


                    {/* Table Start */}
                    <div class="container-fluid pt-4 px-4">
                        <div class="row g-4">
                            <div class="col-12">
                                <div class="bg-light rounded h-100 p-4">
                                    <h6 class="mb-4">Booking Table</h6>
                                    <div className="table-responsive">
                                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                                            <thead>
                                                <tr className="text-dark">
                                                    <th>Service Id</th>
                                                    <th>Customer Name</th>
                                                    <th>Phone</th>
                                                    <th>Service Name</th>
                                                    <th>Service_Date</th>
                                                    <th>Email Id</th>
                                                    <th>Service Status</th>
                                                    <th>Service Amount</th>
                                                    {/* <th>Action</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    FeedbackData.map((data, index) => {
                                                        // let message
                                                        // if (data.service_status === 'Accepted') {
                                                        //     message = <div><button className='btn btn-success text-white'> Accepted </button></div>
                                                        // }
                                                        // else {
                                                        //     message = <div><button className='btn btn-primary text-white' onClick={() => confirmOrder(data.service_id)}>
                                                        //         Pending </button></div>
                                                        // }
                                                        return (
                                                            <tr key={data.id}>
                                                                <td>{data.service_id} </td>
                                                                <td>{data.cname}</td>
                                                                <td>{data.phone_no} </td>
                                                                <td>{data.service} </td>
                                                                <td>{data.service_date}</td>
                                                                <td>{data.email}</td>
                                                                <td>{data.service_status} </td>
                                                                <td>{data.service_amount}</td>
                                                                {/* <td>{message}</td> */}
                                                            </tr>
                                                        )
                                                    }
                                                    )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Table End */}


                    {/* Footer Start */}
                    {/* <div className="container-fluid pt-4 px-4">
                        <div className="bg-light rounded-top p-4">
                            <div className="row">
                                <div className="col-12 col-sm-6 text-center text-sm-start">
                                    &copy; <a href="/">KAC</a>, All Right Reserved.
                                </div>
                                <div className="col-12 col-sm-6 text-center text-sm-start" style={{ color: "#F2F2F2" }}>
                                    This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support.
                                    Designed By Nausheen Ammanagi.
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Footer End */}
                </div>
                {/* Content End */}


                {/* Back to Top */}
                <a href="/" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
            </div>

        </div>
    )
}

export default Table