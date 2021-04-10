import React, { useEffect, useRef, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { portis, web3, hack } from './Config';

export default function SeePrescription({account}) {

    const [data, setData] = useState({
        doctorName: '',
        patientName: '',
        desc: '',
        timeStamp: ''
    })

    const [count, setCount] = useState(1)
    const [fetched, setFetched] = useState(false)
    const [fetching, setFetching] = useState(false)
    const [no_of_prescription, set_total_prescription] = useState(0)
    const accRef = useRef()

    useEffect(() => {
        if (accRef.current.value && fetched) {
            setFetching(true)
            // api

            hack.methods.view_prescription_by_pharma(accRef.current.value, count,account).call((err, res) => {
                if (err) console.log("error in doxcot", err)
                else {
                    console.log("result in doctor", res);
                    setData({
                        doctorName: res.doctor_prescribed,
                        patientName: res.patient_prescribed,
                        desc: res.description,
                        timeStamp: new Date(parseInt(res.time_prescribed)).toLocaleDateString()
                    })

                }
            })
            setFetching(false)
        }
    }, [count])

    const getPrescriptionDetails = () => {

        setFetching(true);

        hack.methods.get_total_number_of_prescriptions_by_pharma(accRef.current.value,account).call((err, res) => {
            if (err) {
                console.log("total  no of prescription is error", err);
            }
            else {
                console.log("total  no of prescription is error", res);
                set_total_prescription(res);
            }
        })

        hack.methods.view_prescription_by_pharma(accRef.current.value, count,account).call((err, res) => {
            if (err) console.log("error in doxcot", err) 
            else {
                console.log("result in doctor", res);
                setData({
                    doctorName: res.doctor_prescribed,
                    patientName: res.patient_prescribed,
                    desc: res.description,
                    timeStamp: new Date(parseInt(res.time_prescribed)).toLocaleDateString()
                })
            }
        })

        setFetching(false);
        setFetched(true);
    }

    const handleClear = () => {
        setFetched(false)
        setFetching(false)
        setCount(1)
        accRef.current.value = ''
    }

    return (
        <div>
            <div class="input-group input-group-lg col-10 mx-auto mt-5" style={{ marginBottom: '4rem' }}>
                <div class="input-group-prepend">
                </div>
                <input name="accountfill" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder='Enter your account hash' ref={accRef} disabled={fetched} />
                {
                    fetched ?
                        <button className='btn btn-primary ml-4' onClick={handleClear} >Clear Account</button>
                        :
                        <button className='btn btn-primary ml-4' onClick={getPrescriptionDetails} >Fetch Details</button>
                }
            </div>
            <div className="container my-5" style={{ minHeight: '20rem' }}>
                {
                    fetched &&
                    <>
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-3 col-form-label font-weight-bold">
                                Patient's Name :{" "}
                            </label>
                            <div className="col-sm-9">
                                <input
                                    value={data.patientName}
                                    type="text"
                                    className="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="name" className="col-sm-3 col-form-label font-weight-bold">
                                Doctor's Name :{" "}
                            </label>
                            <div className="col-sm-9">
                                <input
                                    value={data.doctorName}
                                    type="text"
                                    className="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="linkedin" className="col-sm-3 col-form-label font-weight-bold">
                                Date :{" "}
                            </label>
                            <div className="col-sm-9">
                                <input
                                    value={data.timeStamp}
                                    type="text"
                                    className="form-control"
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="linkedin" className="col-sm-3 col-form-label font-weight-bold">
                                Previous Allergies :{" "}
                            </label>
                            {/* <div className="col-sm-9"> */}
                            <ReactQuill
                                style={{ minHeight: '18rem', margin: '2rem 2rem auto auto' }}
                                className="mb-3"
                                modules={{
                                    toolbar: [
                                        ["bold", "italic", "underline", "strike"],
                                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                        [{ size: ["small", false, "large", "huge"] }],
                                        [{ font: [] }],
                                        [{ color: [] }, { background: [] }],
                                        [{ list: "ordered" }, { list: "bullet" }],
                                        [{ script: "sub" }, { script: "super" }],
                                        ["blockquote", "code-block"],
                                        [{ indent: "-1" }, { indent: "+1" }],
                                        [{ direction: "rtl" }],
                                        [{ align: [] }],
                                        ["link"],
                                        ["clean"],
                                    ],
                                }}
                                value={data.desc}
                                readOnly
                            />
                            {/* </div> */}
                        </div>
                    </>
                }
                {
                    fetching &&
                    <div className="container my-5" style={{ minHeight: '20rem' }}>
                        <Spinner size='lg' animation="border" style={{ display: 'block' }} className='m-auto' role="status">
                            <span className="sr-only mx-auto">Loading...</span>
                        </Spinner>
                    </div>
                }
            </div>
            {
                (fetched && !fetching) &&
                <div className="mr-5 mb-3 mt-5 d-flex justify-content-center align-items-center">
                    {count > 1 && (
                        <Button
                            className="mx-1"
                            variant="danger"
                            onClick={() => {
                                setCount((page) => page - 1);
                            }}
                        >
                            <i className="fa fa-angle-double-left"></i> Previous
                        </Button>
                    )}
                    {count < no_of_prescription && (
                        <Button
                            variant="danger"
                            className="mx-1"
                            onClick={() => {
                                setCount((page) => page + 1);
                            }}
                        >
                            Next <i className="fa fa-angle-double-right"></i>
                        </Button>
                    )}
                </div>
            }
        </div>
    )
}
