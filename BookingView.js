import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const BookingView = () => {
    const [FeedbackData, setFeedbackData] = useState([])
    useEffect(() => {
        getFeedback();
    });

    const getFeedback = async () => {
        const result = await axios.get(`http://localhost:3001/viewbooking`);
        setFeedbackData(result.data);
        console.log(result.data);
    };

    return (
        <div>
            <div className='container-fluid mt-2'>
                <div className='row'>
                    <h1> Booking Details </h1>
                    <table className='table table-bordered table-hover mt-2'>
                        <thead className='table-primary'>
                            <tr>
                                <th> Service_id </th>
                                <th> Customer Name</th>
                                <th> Phone </th>
                                <th> Service </th>
                                <th> Service_Date </th>
                                <th> Message </th>
                                <th> Service_Status </th>
                                <th> Service_Amount </th>                               
                            </tr>
                        </thead>

                        <tbody>
                            {
                                FeedbackData.map((data, index) => {
                                    return (<tr key={data.id}>
                                        <td>{data.service_id} </td>
                                        <td>{data.cname}</td>
                                        <td>{data.phone_no} </td>
                                        <td>{data.service} </td>
                                        <td>{data.service_date}</td>
                                        <td>{data.message} </td>
                                        <td>{data.service_status} </td>
                                        <td>{data.service_amount}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BookingView
