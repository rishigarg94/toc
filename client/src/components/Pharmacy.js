import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
// import axios from 'axios'
// import Product from './Product'

const Pharmacy = () => {
    // const url = '/api/medicine'
    // const [medicines, setMedicines] = useState(null)

    // useEffect(() => {
    //     axios.get(url)
    //         .then(res => {
    //             setMedicines(res.data)
    //         })
    // }, [])
    // if (medicines) {
    //     product =
    //     <div>
    //         medicines.map((medicine) => (
    //                         <Product
    //                             key={medicine._id}
    //                             medicineID={medicine._id}
    //                             medicine={medicine._name}
    //                             medicinePrice={medicine._price}
    //                             medicineImageURL={medicine._img}
    //                         />
    //                     ))
    //     </div>
    // }
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
                        <NavLink to='/dashboard/pharmacy/01?120'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹120
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/pharmacy/02?110'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹110
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/pharmacy/03?150'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹150
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/pharmacy/04?150'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹150
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/pharmacy/05?150'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹150
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/pharmacy/06?150'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹150
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/pharmacy/07?150'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹150
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/pharmacy/08?150'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹150
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/pharmacy/09?150'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹150
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/pharmacy/10?150'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹150
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/pharmacy/11?150'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹150
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/dashboard/pharmacy/12?150'>
                            <div className="product_box">
                                <div className="product_img-box">
                                    <div className="box-img-file"></div>
                                </div>
                                <div className="product_detail-box">
                                    <span>
                                        ₹150
                                </span>
                                    <p>
                                        Passage of Lorem Ipsum, you
                                </p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Pharmacy;