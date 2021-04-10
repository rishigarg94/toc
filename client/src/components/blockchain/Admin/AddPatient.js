import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { portis, web3, hack } from '../Config'
export default function AddPatient({ account }) {

    const name = useRef()
    const hash = useRef()
    const bgrp = useRef()
    const dob = useRef()
    const cno = useRef()
    const emergencyCno = useRef()
    const pa = useRef()
    const balance = useRef()

    const add = async() => { 

        if (!name.current.value || !hash.current.value || !bgrp.current.value || !dob.current.value || !balance.current.value || !cno.current.value || !pa.current.value || !emergencyCno.current.value) {
            toast.warn('Please specify all the details')
            return
        }

        //api
        let msg = await hack.methods.add_patient(hash.current.value, name.current.value, dob.current.value, pa.current.value, bgrp.current.value, balance.current.value, cno.current.value, emergencyCno.current.value, 0, 1,account).send({
            from: account,
            gas: 1000000
        });

        console.log("message is ", msg);

        toast.success('Patient Added !')

        name.current.value = ''
        hash.current.value = ""
        bgrp.current.value = ""
        dob.current.value = ""
        balance.current.value = null
        cno.current.value = ""
        pa.current.value = ""
        emergencyCno.current.value = ""
    }

    return (
        <div>
            <div className="container my-5">
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label font-weight-bold">
                        Patient's A/C Hash :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            ref={hash}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label font-weight-bold">
                        Patient's Name :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            ref={name}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-sm-3 col-form-label font-weight-bold">
                        Date of Birth :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="name"
                            className="form-control"
                            id="dob"
                            ref={dob}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="regis" className="col-sm-3 col-form-label font-weight-bold">
                        Blood Group :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="bloodgrp"
                            ref={bgrp}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="year" className="col-sm-3 col-form-label font-weight-bold">
                        Contact no. :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="contact"
                            ref={cno}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="linkedin" className="col-sm-3 col-form-label font-weight-bold">
                        Emergency Contact no. :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="emergency"
                            ref={emergencyCno}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="linkedin" className="col-sm-3 col-form-label font-weight-bold">
                        Previous Allergies :{" "}
                    </label>
                    <div className="col-sm-9">
                        <textarea
                            ref={pa}
                            className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="linkedin" className="col-sm-3 col-form-label font-weight-bold">
                        Balance :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            ref={balance}
                            type="number"
                            className="form-control"
                            id="linkedin"
                        />
                    </div>
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                    <button className='btn btn-primary ml-4 btn-lg' onClick={add} >Add</button>
                </div>
            </div>
        </div>
    )
}
