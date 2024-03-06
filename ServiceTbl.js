import axios from 'axios';
import React, { useState } from 'react';

const ServiceTbl = () => {

    const initialValues = { sid: "", sname: "" }
    const [formValues, setFormvalues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormvalues({ ...formValues, [name]: value });
        console.log(formValues.sname)
    }

    const FormFeedback = (e) => {
        e.preventDefault();
        console.log(formValues)
        axios.post("http://localhost:3001/servicetbl", {
            fdata: formValues

            //uid:uid
        }).then((response) => {
            console.log(response);
            alert("Service added successfully")
            //window.location="http://localhost:3000/userhome"
        })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="container text-start" style={{ alignContent: "center" }}>
                <h2 style={{ textAlign: "center" }}>Add Services</h2>
                <form onSubmit={FormFeedback}>
                    <div className="mb-3 mt-3">
                        <label for="id">Service id:</label>
                        <input type="int" value={formValues.sid} className="form-control" id="id" placeholder="Enter Service id" name="sid" onChange={handleChange} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label for="name">Service Name:</label>
                        <input type="text" value={formValues.sname} className="form-control" id="name" placeholder="Enter Service name" name="sname" onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>

        </div>
    )
}

export default ServiceTbl
