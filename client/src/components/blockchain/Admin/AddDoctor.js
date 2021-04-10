import React, { useRef } from 'react'
import { toast } from 'react-toastify'
import { portis, web3, hack } from '../Config'

export default function AddDoctor({ account }) {
 
    const name = useRef()
    const hash = useRef()
    const spec = useRef()
    const cno = useRef()
    const addr = useRef()
    const balance = useRef()

    const add = async() => {

        if (!name.current.value || !hash.current.value || !spec.current.value || !balance.current.value || !cno.current.value || !addr.current.value) {
            toast.warn('Please specify all the details')
            return;
        }

        //api
        let msg2 = await hack.methods.add_doctor(hash.current.value, name.current.value, spec.current.value, cno.current.value, addr.current.value, balance.current.value, 1,account).send({
            from: account,
            gas: 1000000
        });
        console.log("message two is ", msg2);

        toast.success('Doctor Added !')

        name.current.value = ''
        hash.current.value = ""
        spec.current.value = ""
        balance.current.value = null
        cno.current.value = ""
        addr.current.value = ""
    }

    return (
        <div>
            <div className="container my-5">
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label font-weight-bold">
                        Doctor's A/C Hash :{" "}
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
                        Doctor's Name :{" "}
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
                        Specialization :{" "}
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="name"
                            className="form-control"
                            id="dob"
                            ref={spec}
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
                        Address :{" "}
                    </label>
                    <div className="col-sm-9">
                        <textarea
                            ref={addr}
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
