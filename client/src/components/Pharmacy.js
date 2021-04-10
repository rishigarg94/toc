import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import axios from 'axios'
// import Product from './Product'

const Pharmacy = () => {

    const [medicines, setMedicines] = useState([])

    useEffect(() => {
        fetch('/api/medicines').then(res => res.json())
            .then(data => {
                setMedicines(data)
            })
    }, [])

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
                            medicines.map(medicine => (

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