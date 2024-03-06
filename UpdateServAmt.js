//import {useParams} from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';

const UpdateServAmt = () => {
    const initialValues = { service_id: "", service_amount: "" }
    const [formValues, setFormvalues] = useState(initialValues)
    // const {sid} = useParams();
    // console.log(sid)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormvalues({ ...formValues, [name]: value });
        console.log(formValues.service_id)
    }

    //const {service_amount} = useParams();

    const UpdateAmt = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/updateservamt", {
            data: formValues

        }).then((response) => {
            console.log(response);
            alert("Service Amount is Updated")
            document.location = "http://localhost:3000/adminhome"

        })
            .catch(error => {
                console.log(error)
            })





    }

    return (
        <div>
            <div className="container mt-3 text-start">
                <h2 style={{ textAlign: "center" }}>Update Service Amount</h2>
                <form onSubmit={UpdateAmt}>
                    <div className="mb-3 mt-3">
                        <label for="id">Service Id:</label>
                        <input type="text" value={formValues.service_id} class="form-control" placeholder="Enter Service Id" name="service_id" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="amt">Service Charges:</label>
                        <input type="text" class="form-control" value={formValues.service_amount} placeholder="Enter Service Charges" name="service_amount" onChange={handleChange} />
                    </div>
                    <button type="submit" class="btn btn-primary">Done</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateServAmt
