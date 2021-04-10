import React, { useState } from 'react'
import { hack, web3 } from './Config'

export default function Details({ account }) {

    const [data, setData] = useState({
        name: '',
        contactNo: "",
        emergencyContactNo: "",
        bgrp: '',
        balance: null,
        previousAllergy: '',
        dob: ''
    })

    const getMyDetails =  async() => {
        await hack.methods.show_self_deatils(account,account).call((err, res) => {
           if (err) console.log("hi error",err,"account is ",account)

           else {
               setData({
                   name: res.patient_name,
                   dob: res.patient_dob,
                   contactNo: res.patient_contact_number,
                   emergencyContactNo: res.patient_emergency_contact_number,
                   previousAllergy: res.patient_previous_allergies,
                   bgrp: res.patient_blood_group,
                   balance: res.patient_balance
               })
           }
       })
   }
    return (
        <div> 
            <div class="input-group input-group-lg col-10 mx-auto mt-5" style={{ marginBottom: '4rem' }}>
                <div class="input-group-prepend">
                </div>
                <input name="accountfill" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Enter your account hash' disabled value={account} />
                <button className='btn btn-primary ml-4' onClick={getMyDetails} disabled={account.length === 0}>Get my details</button>
            </div>
            <div className="container my-5">
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label font-weight-bold">
                        Name :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            value={data.name}
                            type="text"
                            className="form-control"
                            id="name"
                            disabled
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-3 col-form-label font-weight-bold">
                        Date of Birth :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            value={data.dob}
                            type="name"
                            className="form-control"
                            id="dob"
                            disabled
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="regis" className="col-sm-3 col-form-label font-weight-bold">
                        Blood Group :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            value={data.bgrp}
                            type="text"
                            className="form-control"
                            id="bloodgrp"
                            disabled
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="year" className="col-sm-3 col-form-label font-weight-bold">
                        Contact no. :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            value={data.contactNo}
                            type="text"
                            className="form-control"
                            id="contact"
                            disabled
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="linkedin" className="col-sm-3 col-form-label font-weight-bold">
                        Emergency Contact no. :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            value={data.emergencyContactNo}
                            disabled
                            type="text"
                            className="form-control"
                            id="emergency"
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="linkedin" className="col-sm-3 col-form-label font-weight-bold">
                        Previous Allergies :{" "}
                    </label>
                    <div className="col-sm-9">
                        <textarea disabled value={data.previousAllergy} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="linkedin" className="col-sm-3 col-form-label font-weight-bold">
                        Balance :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            value={data.balance}
                            disabled
                            type="number"
                            className="form-control"
                            id="linkedin"
                        />
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}
