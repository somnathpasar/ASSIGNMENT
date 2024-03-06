import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
let sid=localStorage.getItem("sid")
const ServiceStatusView = () => {
    const [FeedbackData, setFeedbackData] = useState([])
    useEffect(() => {
        getFeedback();
    });

    const getFeedback = async () => {
        const result = await axios.get(`http://localhost:3001/viewservicestatus/${sid}`);
        setFeedbackData(result.data);
        console.log(result.data);
    }

    return (
        <div>
            <div className='container-fluid mt-2'>
                <div className='row'>
                    <h1> Your Service Status </h1>
                    <table className='table table-bordered table-hover mt-2'>
                        <thead className='table-primary'>
                            <tr>
                                <th> Service Id </th>
                                <th> Customer Name</th>
                                <th> Service </th>
                                <th> Service Date </th>
                                <th> Service Status </th>
                                <th> Service Amount </th>
                                <th> Payment Status</th>                               
                            </tr>
                        </thead>

                        <tbody>
                            {
                                FeedbackData.map((data, index) => {
                                    let message
                                    let amount=localStorage.setItem('amount',data.service_amount)
                                    message= <button type="submit" class="btn btn-primary"><a href='/paybill' 
                                    style={{textDecoration:"none"}}> Pay Now </a></button>
                                    return (<tr key={data.id}>
                                        <td>{data.service_id} </td>
                                        <td>{data.cname}</td>
                                        <td>{data.service} </td>
                                        <td>{data.service_date}</td>
                                        <td>{data.service_status} </td> 
                                        <td>{data.service_amount}</td>
                                        <td>{data.payment_status}</td>
                                    </tr>
                                    )

                                    
                                })
                                
                            }
                        </tbody>
                       <p>{message}</p>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ServiceStatusView
