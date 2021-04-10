import React from 'react'

const Product = (props) => {
    const url = `/dashboard/pharmacy/${props.medicineID}`
    if (props.medicine) {
        product =
            <div>
                <NavLink to={url}>
                    <div className="product_box">
                        <div className="product_img-box">
                            <img
                                src={props.medicineImageURL}
                                alt={props.medicine}
                            />
                        </div>
                        <div className="product_detail-box">
                            <span>
                                {props.medicinePrice}
                            </span>
                            <p>
                                {props.medicine}
                            </p>
                        </div>
                    </div>
                </NavLink>
            </div>
    }
    return (
        { product }
    )
}

export default Product