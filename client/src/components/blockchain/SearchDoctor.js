import React, { useState,useRef } from 'react'
import { Spinner } from 'react-bootstrap'
import { hack, web3 } from './Config'

export default function SearchDoctor({account}) {

    const doctor_hash=useRef()
    const getDoctorDetails = () => {
        setShow(1)
        //api
        hack.methods.search_doctor(doctor_hash.current.value,account).call((err, res) => {
            if (err) console.log("error in doxcot" ,err)
            else {
                console.log("result in doctor" ,res);
                setData({
                    name: res.doctor_name,
                    addr:res.doctor_address,
                    phone:res.doctor_phone_number,
                    speciality: res.doctor_speciality
                })
                setShow(2);
            }
        })        
        
    }

    const [data, setData] = useState({
        name: '',
        addr: '',
        phone: '',
        speciality: ''
    })
    const [show, setShow] = useState(0)

    return (
        <div>
            <div className="input-group input-group-lg col-10 mx-auto mt-5" style={{ marginBottom: '4rem' }}>
                <div className="input-group-prepend">
                </div>
                <input ref={doctor_hash} id="getaccount" type="text" required className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Enter the Doctor's account hash" />
                <button className='btn btn-primary ml-4' onClick={getDoctorDetails} disabled={show === 1} >Fetch Details</button>
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
                        <label htmlFor="name" className="col-sm-2 col-form-label font-weight-bold">
                            Name :{" "}
                        </label>
                        <div className="col-sm-10">
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
                        <label htmlFor="regis" className="col-sm-2 col-form-label font-weight-bold">
                            Contact no. :{" "}
                        </label>
                        <div className="col-sm-10">
                            <input
                                value={data.phone}
                                disabled
                                type="text"
                                className="form-control"
                                id="regis"
                            />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-2 col-form-label font-weight-bold">
                            Specialility :{" "}
                        </label>
                        <div className="col-sm-10">
                            <textarea disabled value={data.speciality} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-sm-2 col-form-label font-weight-bold">
                            Address :{" "}
                        </label>
                        <div className="col-sm-10">
                            <textarea disabled value={data.addr} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            }
        </div>
    )
}
