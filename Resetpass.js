import axios from 'axios';
import React, { useState } from 'react';

const uid = localStorage.getItem('user')

const Resetpass = () => {
    const [newpass, setNewpass] = useState('')
    const [confirmpass, setConfirmpass] = useState('')


    const handleChange = (e) => {
        //const {name,value}= e.target
        setNewpass(e.target.value);
    }

    const ResethandleChange = (e) => {
        //const {name,value}= e.target
        setConfirmpass(e.target.value);
    }

    const ResetFormSubmit = (e) => {
        e.preventDefault();
        if (newpass === confirmpass) {
            axios.post("http://localhost:3001/resetpass", {
                newpass: newpass,
                confirmpass: confirmpass,
                uid: uid

            }).then((response) => {
                console.log(response);
                alert("Your Password is changed")
                document.location = "http://localhost:3000/login"

            })
                .catch(error => {
                    console.log(error)
                })

        }

        else {
            alert("New password and confirm password must be same")
        }

    }

    return (
        <div>
            <div className='container mt-2' style={{ width: "700px" }}>
                <div className='row'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3> Reset Password</h3>
                        </div>

                        <div className='card-body'>
                            <form onSubmit={ResetFormSubmit}>
                                <div className='mb-3 mt-3'>
                                    <input type='text' value={newpass} name='newpass' className='form-control' placeholder='Enter your New passsword' required onChange={handleChange} />
                                </div>

                                <div className='mb-3 mt-3'>
                                    <input type='text' value={confirmpass} name='confirmpass' className='form-control' placeholder='Enter your Confirm passsword' required onChange={ResethandleChange} />
                                </div>
                                <input type='submit' className='btn btn-primary' value='Reset Password' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resetpass
