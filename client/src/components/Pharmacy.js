import { useSpeechContext } from '@speechly/react-client'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Pharmacy = () => {

    const [medicines, setMedicines] = useState([])
    const [medicines1, setMedicines1] = useState([])
    const { segment } = useSpeechContext()

    useEffect(() => {
        fetch('/api/medicines').then(res => res.json())
            .then(data => {
                setMedicines(data)
                setMedicines1(data)
            })
    }, [])

    useEffect(() => {
        if (segment) {
            if (segment.intent.intent === 'search_medicine') {
                segment.entities.forEach(e => {
                    setMedicines1(prev => prev.filter(item => item.name === e.value || item.tags.includes(e.value)))
                    // setMedicines1(prev => prev.filter(item => item.tags.includes(e.value)))
                    // e.type
                })
                // if()
            }
            else if (segment.intent.intent === 'reset') {
                segment.entities.forEach(e => {
                    if (e.value = 'reset_voice') setMedicines1(medicines)
                })
            }
        }
    }, [segment])

    return (
        <div>
            <section className="products_section">
                <div className="heading_container">
                    <h2>
                        Medical Store
                </h2>
                    <p>
                        Only Digital Payment Accepted
                </p>
                </div>
                <div className="container layout_padding">
                    <div className="flex-container wrap product_container">
                        {/* {product} */}
                        {
                            medicines1.map(medicine => (

                                <NavLink to='/dashboard/pharmacy/01?120' key={medicine._id}>
                                    <div className="product_box my-5">
                                        <div className="product_img-box">
                                            <div className="">
                                                <img src={medicine.image} alt="dd" width={250} height={250} />
                                            </div>
                                        </div>
                                        <div className="product_detail-box">
                                            <span>
                                                {medicine.price}
                                            </span>
                                            <p>
                                                {
                                                    medicine.name
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            ))}
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Pharmacy;