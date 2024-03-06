//import React, { useState, useEffect } from 'react';
import Adm1 from '../imgs/user.png';
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
//const id = localStorage.getItem('user')


const AdminHome = () => {

    const [FeedbackData, setFeedbackData] = useState([])
    useEffect(() => {
        getFeedback();
    });

    const getFeedback = async () => {
        const result = await axios.get(`http://localhost:3001/viewbooking`);
        setFeedbackData(result.data);
        console.log(result.data);
    };



    const confirmOrder = id => {
        alert(id)
        axios.post(`http://localhost:3001/orderconfirm/${id}`)
            .then(response => {
                getFeedback();

            });
    }



    return (
        <div>
            <div className="container-xxl position-relative bg-white d-flex">
                {/* Spinner Start */}
                <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" style={{ width: "2rem", height: "2rem" }} role="status">
                        <span className="sr-only">Loading...</span>
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
                            <a href="/adminhome" className="nav-item nav-link active text-start px-4"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                            {/* <div className="nav-item dropdown">
                                <a href="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Elements</a>
                                <div className="dropdown-menu bg-transparent border-0">
                                    <a href="button.html" className="dropdown-item">Buttons</a>
                                    <a href="typography.html" className="dropdown-item">Typography</a>
                                    <a href="element.html" className="dropdown-item">Other Elements</a>
                                </div>
                            </div> */}
                            <a href="/table" className="nav-item nav-link text-start px-4"><i className="fa fa-table me-2"></i>Tables</a>
                        </div>
                    </nav>
                </div>
                {/* Sidebar End */}

                {/* Content Start */}
                <div className="content">
                    {/* Navbar Start */}
                    {/* Navbar End */}


                    {/* Sale & Revenue Start */}
                    {/* <div class="container-fluid pt-4 px-0">
                        <div class="row g-4">
                            <div class="col-sm-6 col-xl-3">
                                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                    <i class="fa fa-chart-line fa-3x text-primary"></i>
                                    <div class="ms-3">
                                        <p class="mb-2">Today Sale</p>
                                        <h6 class="mb-0">$1234</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                    <i class="fa fa-chart-bar fa-3x text-primary"></i>
                                    <div class="ms-3">
                                        <p class="mb-2">Total Sales</p>
                                        <h6 class="mb-0">₹ 1234</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-3">
                                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                    <i class="fa fa-chart-area fa-3x text-primary"></i>
                                    <div class="ms-3">
                                        <p class="mb-2">Today Revenue</p>
                                        <h6 class="mb-0">$1234</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xl-4">
                                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                    <i class="fa fa-chart-pie fa-3x text-primary"></i>
                                    <div class="ms-3">
                                        <p class="mb-2">Total Revenue</p>
                                        <h6 class="mb-0">₹ 1234</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Sale & Revenue End */}


                    {/* Sales Chart Start */}
                    {/* <div className="container-fluid pt-4 px-4">
                                            <div className="row g-4">
                                                <div className="col-sm-12 col-xl-6">
                                                    <div className="bg-light text-center rounded p-4">
                                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                                            <h6 className="mb-0">Worldwide Sales</h6>
                                                            <a href="/">Show All</a>
                                                        </div>
                                                        <canvas id="worldwide-sales"></canvas>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-xl-6">
                                                    <div className="bg-light text-center rounded p-4">
                                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                                            <h6 className="mb-0">Salse & Revenue</h6>
                                                            <a href="/">Show All</a>
                                                        </div>
                                                        <canvas id="salse-revenue"></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                    {/* Sales Chart End */}


                    {/* Recent Sales Start */}
                    <div className="container-fluid pt-4 px-0">
                        <div className="bg-light text-center rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">Recent Bookings</h6>
                                {/* <a href="/">Show All</a> */}
                            </div>
                            <div className="table-responsive" >
                                <table className="table table-bordered table-hover mb-0">
                                    <thead className='table-dark'>
                                        <tr className="text-dark">
                                            <th className='text-white'>Service Id</th>
                                            <th className='text-white'>Customer Name</th>
                                            <th className='text-white'>Phone</th>
                                            <th className='text-white'>Service</th>
                                            <th className='text-white'>Service Date</th>
                                            {/* <th>Email id</th>  */}
                                            <th className='text-white'>Service Status</th>
                                            <th className='text-white'>Payment Status</th>
                                            <th colSpan={2} align='center' className='bg-warning text-white text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            FeedbackData.map((data, index) => {
                                                let message
                                                if (data.service_status === 'Accepted') {
                                                    message = <div><button className='btn btn-success text-white'>Accepted </button></div>
                                                }
                                                else {
                                                    message = <div><button className='btn btn-primary text-white' onClick={() => confirmOrder(data.service_id)}>
                                                        Pending </button></div>
                                                }
                                                return (
                                                    <tr key={data.id}>
                                                        <td>{data.service_id} </td>
                                                        <td>{data.cname}</td>
                                                        <td>{data.phone_no} </td>
                                                        <td>{data.service} </td>
                                                        <td>{data.service_date}</td>
                                                        {/* <td>{data.email}</td> */}
                                                        <td>{data.service_status} </td>
                                                        <td>{data.payment_status}</td>
                                                        <td>{message}</td>
                                                        <td><a href={'/updateservamt'}><button className='btn btn-secondary'>Update Service Amount</button></a></td>
                                                        {/* <td><a href={`/updateservamt/${data.service_id}`}><button className='btn btn-secondary'> Update Service Amount </button></a></td> */}
                                                    </tr>
                                                )
                                            }
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Recent Sales End */}

                    {/* Widgets Start */}
                    {/* <div className="container-fluid pt-4 px-4">
                        <div className="row g-4"> */}
                    {/* <div className="col-sm-12 col-md-6 col-xl-4">
                                                    <div className="h-100 bg-light rounded p-4">
                                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                                            <h6 className="mb-0">Messages</h6>
                                                            <a href="/">Show All</a>
                                                        </div>
                                                        <div className="d-flex align-items-center border-bottom py-3">
                                                            <img className="rounded-circle flex-shrink-0" src={Adm1} alt="not found" style={{width: "40px", height: "40px"}}/>
                                                                <div className="w-100 ms-3">
                                                                    <div className="d-flex w-100 justify-content-between">
                                                                        <h6 className="mb-0">Fuad Katnur</h6>
                                                                        <small>15 minutes ago</small>
                                                                    </div>
                                                                    <span>Short message goes here...</span>
                                                                </div>
                                                        </div>
                                                        <div className="d-flex align-items-center border-bottom py-3">
                                                            <img className="rounded-circle flex-shrink-0" src={Adm1} alt="not found" style={{width: "40px", height: "40px"}}/>
                                                                <div className="w-100 ms-3">
                                                                    <div className="d-flex w-100 justify-content-between">
                                                                        <h6 className="mb-0">Fuad Katnur</h6>
                                                                        <small>15 minutes ago</small>
                                                                    </div>
                                                                    <span>Short message goes here...</span>
                                                                </div>
                                                        </div>
                                                        <div className="d-flex align-items-center border-bottom py-3">
                                                            <img className="rounded-circle flex-shrink-0" src={Adm1} alt="not found" style={{width: "40px", height: "40px"}}/>
                                                                <div className="w-100 ms-3">
                                                                    <div className="d-flex w-100 justify-content-between">
                                                                        <h6 className="mb-0">Fuad Katnur</h6>
                                                                        <small>15 minutes ago</small>
                                                                    </div>
                                                                    <span>Short message goes here...</span>
                                                                </div>
                                                        </div>
                                                        <div className="d-flex align-items-center pt-3">
                                                            <img className="rounded-circle flex-shrink-0" src={Adm1} alt="not found" style={{width: "40px", height: "40px"}}/>
                                                                <div className="w-100 ms-3">
                                                                    <div className="d-flex w-100 justify-content-between">
                                                                        <h6 className="mb-0">Fuad Katnur</h6>
                                                                        <small>15 minutes ago</small>
                                                                    </div>
                                                                    <span>Short message goes here...</span>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div> */}
                    {/* <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="h-100 bg-light rounded p-4">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <h6 className="mb-0">Calender</h6>
                                        <a href="/">Show All</a>
                                    </div>
                                    <div id="calender"></div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <div className="h-100 bg-light rounded p-4">
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <h6 className="mb-0">To Do List</h6>
                                        <a href="/">Show All</a>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <input className="form-control bg-transparent" type="text" placeholder="Enter task" />
                                        <button type="button" className="btn btn-primary ms-2">Add</button>
                                    </div>
                                    <div className="d-flex align-items-center border-bottom py-2">
                                        <input className="form-check-input m-0" type="checkbox" />
                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <span>Short task goes here...</span>
                                                <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center border-bottom py-2">
                                        <input className="form-check-input m-0" type="checkbox" />
                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <span>Short task goes here...</span>
                                                <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center border-bottom py-2">
                                        <input className="form-check-input m-0" type="checkbox" checked />
                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <span><del>Short task goes here...</del></span>
                                                <button className="btn btn-sm text-primary"><i className="fa fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center border-bottom py-2">
                                        <input className="form-check-input m-0" type="checkbox" />
                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <span>Short task goes here...</span>
                                                <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center pt-2">
                                        <input className="form-check-input m-0" type="checkbox" />
                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <span>Short task goes here...</span>
                                                <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Widgets End */}

                    {/* Footer Start */}
                    {/* <div className="container-fluid pt-4 px-0">
                        <div className="bg-light rounded-top p-4">
                            <div className="row">
                                <div className="col-12 col-sm-6 text-center text-sm-start">
                                    &copy; <a href="/">KAC</a>, All Right Reserved.
                                </div>
                                <div className="col-12 col-sm-6 text-center text-sm-start" style={{ color: "#F2F2F2" }}>
                                    This template is free as long as you keep the footer author's credit link/attribution link/backlink. If you'd like to use the template without the footer author's credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support.
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
                <a href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
            </div>

        </div>
    )
}
export default AdminHome