import axios from 'axios';
import React, { useState } from 'react';

const ServiceStatus = () => {

    const initialValues = { service_id: "" }
    const [formValues, setFormvalues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormvalues({ ...formValues, [name]: value });
        console.log(formValues.service_id)
    }

    const FormFeedback = (e) => {
        //alert("hi")
        e.preventDefault();
        console.log(formValues)
        axios.post("http://localhost:3001/check_servicestatus", {
            fdata: formValues

            //uid:uid
        }).then((response) => {
            console.log(response);

            if (response.data.length > 0) {
                localStorage.setItem('sid',formValues.service_id)
                window.location = "http://localhost:3000/servicestatusview"
            }
            else{
                alert("Invalid Service Id")
                window.location = "http://localhost:3000/servicestatus"
            }
        })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className='container mt-2' style={{ width: "700px" }}>
                <div className='row'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3>Your Service Status</h3>
                        </div>

                        <div className='card-body'>
                            <form onSubmit={FormFeedback}>
                                <div className="mb-3 mt-3 text-start">
                                    <label for="id">Your Service Id:</label>
                                    <input type="text" class="form-control" placeholder="Enter Your Service Id" name="service_id" value={formValues.service_id} onChange={handleChange} />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceStatus
