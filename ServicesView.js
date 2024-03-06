import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

const ServicesView = () => {

    const [FeedbackData, setFeedbackData] = useState([])
    useEffect(() => {
        getFeedback();
    });

    const getFeedback = async () => {
        const result = await axios.get(`http://localhost:3001/viewservices`);
        setFeedbackData(result.data);
        console.log(result.data);
    };

    return (
        <div>
            <div className='container-fluid mt-2'>
                <div className='row'>
                    <h1> Services Details </h1>
                    <table className='table table-bordered table-hover mt-2'>
                        <thead className='table-primary'>
                            <tr>
                                <th> Service_id </th>
                                <th> Service Name</th>
                           </tr>
                        </thead>

                        <tbody>
                            {
                                FeedbackData.map((data, index) => {
                                    return (<tr key={data.id}>
                                        <td>{data.sid} </td>
                                        <td>{data.sname} </td>
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

export default ServicesView
