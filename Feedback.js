import axios from 'axios';
import React, { useState } from 'react';

const Feedback = () => {

    const initialValues = { email:"",about_service:"",comments:"" }
    const [formValues, setFormvalues] = useState(initialValues)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormvalues({ ...formValues, [name]: value });
        console.log(formValues.email)
    }

    const FormFeedback = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:3001/feedback", {
            
            // email:'abc@gmail.com',
            // about_service:'good',
            // comments:'good'
            //uid:uid
            fdata:formValues
        }).then((response) => {
            console.log(response);
            alert("Thank you for your feedback")
            //window.location="http://localhost:3000/userhome"
        })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="container mt-3 text-start" style={{ alignContent: "center" }}>
                <h2 style={{ textAlign: "center" }}>Customer Feedback</h2>
                <form onSubmit={FormFeedback}>
                    <div className="mb-3 mt-3">
                        <label for="email">Email:</label>
                        <input type="email" value={formValues.email} class="form-control" id="email" placeholder="Enter email" name="email" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="text">About Service:</label>
                        <input type="text" value={formValues.about_service} class="form-control" id="about_service" placeholder="Enter About Service" name="about_service" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="text">Comments:</label>
                        <input type="text" value={formValues.comments} class="form-control" id="comments" placeholder="Enter Comments" name="comments" onChange={handleChange} />
                    </div>
                    <button type="submit" class="btn btn-primary">Feedback</button>
                </form>
            </div>
        </div>
    )
}

export default Feedback
