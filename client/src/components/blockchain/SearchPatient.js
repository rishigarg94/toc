import React, { useState,useRef } from 'react'
import { Spinner } from 'react-bootstrap'
import { portis, web3, hack } from './Config'

export default function SearchPatient() {

    const patient_hash_ref = useRef()

    const getPatientDetails = () => {
        setShow(1)
        // api
        hack.methods.view_patient_details(patient_hash_ref.current.value).call((err, res) => {
            if (err) console.log("error in doxcot" ,err)
            else {
                console.log("result in doctor" ,res);
                setData({
                    name: res.patient_name,
                    contactNo: res.patient_contact_number,
                    emergencyCNo: res.patient_emergency_contact_number,
                    bgrp: res.patient_blood_group,
                    previousAllergy: res.patient_previous_allergies,
                    dob: res.patient_dob
                })
                setShow(2);
            }
        })        
        setShow(2)
    }

    const [data, setData] = useState({
        name: '',
        contactNo: "",
        emergencyCNo: "",
        bgrp: '',
        previousAllergy: '',
        dob: ''
    })

    const [show, setShow] = useState(0)

    return (
        <div>
            <div className="input-group input-group-lg col-10 mx-auto mt-5" style={{ marginBottom: '4rem' }}>
                <div className="input-group-prepend">
                </div>
                <input ref={patient_hash_ref}name="accountfill" type="text" required className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Enter the Patient's account hash" />
                <button className='btn btn-primary ml-4' onClick={getPatientDetails} disabled={show === 1} >Fetch Details</button>
            </div>
            {
                show === 1 &&
                <div className="container my-5">
                    <Spinner size='lg' animation="border" style={{ display: 'block' }} className='m-auto' role="status">
                        <span className="sr-only mx-auto">Loading...</span>
                    </Spinner>
                </div>
            }
            {
                show === 2 &&
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
                                value={data.emergencyCNo}
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
                    <br />
                    <br />
                </div>
            }
        </div>
    )
}
