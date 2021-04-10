import React, { useRef, useState } from 'react'
import { portis, web3, hack } from './Config'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function GivePrescription({account}) {
    const accNo = useRef() 
    const [desc, setDesc] = useState("")

    const sendPrescription = async() => {
        let msg = await hack.methods.give_prescription(account, accNo.current.value,desc).send({
            from: account,
            gas: 1000000
        }); 

        console.log(msg);
    }

    

    return (
        <div>
            <div className="input-group input-group-lg col-10 mx-auto mt-5" style={{ marginBottom: '2rem' }}>
                <input type="text" required className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Enter the Patient's account hash" ref={accNo} />
            </div>
            <div className="input-group input-group-lg col-10 mx-auto" style={{ marginBottom: '4rem' }}>
                <ReactQuill
                    style={{ minHeight: '18rem' }}
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
                    value={desc}
                    onChange={setDesc}
                />
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button className='btn btn-primary ml-4 btn-lg' onClick={sendPrescription}>Send</button>
            </div>
        </div>
    )
}
