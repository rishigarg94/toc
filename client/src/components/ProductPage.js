import React from 'react'

const ProductPage = (props) => {
    console.log(props);
    return (
        <div>
            Product with id {props.match.params.id} and price ₹{props.location.search.slice(1)}
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