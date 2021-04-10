import React, { useState, useEffect, useParams } from 'react'

const ProductPage = (props) => {
    const url = `/api/medicines/${props.match.params.id}`
    console.log(url)
    const [medicine, setMedicine] = useState([])
    fetch(url, {
        method: 'post'
    }).then(res => res.json())
        .then(data => {
            setMedicine(data)
        })

    return (
        <div className="product_box my-5">
            <div className="product_img-box">
                <div className="">
                    <img src={medicine.image} alt="dd" align="center" width={250} height={250} />
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
                <p>
                    {medicine.desc}
                </p>
            </div>
        </div>
    )
}

export default ProductPage
// import React, { useState, useEffect } from 'react'

// const ProductPage = (props) => {
//     const url = `/dashboard/pharmacy/${props.match.params.id}`
//     const [medicine, setMedicine] = useState(null)

//     useEffect(() => {
//         axios.post(url)
//             .then(res => {
//                 setMedicine(res.data)
//             })
//     }, [])
//     if (medicine) {
//         product =
//             <div>
//                 <NavLink to={url}>
//                     <div className="product_box">
//                         <div className="product_img-box">
//                             <img
//                                 src={medicine.imageurl}
//                                 alt={medicine.name}
//                             />
//                         </div>
//                         <div className="product_detail-box">
//                             <span>
//                                 {medicine.price}
//                             </span>
//                             <p>
//                                 {medicine.name}
//                             </p>
//                         </div>
//                         <div>
//                             <p>
//                                 {medicine.description}
//                             </p>
//                         </div>
//                     </div>
//                 </NavLink>
//             </div>
//     }
//     return (
//         { product }
//     )
// }