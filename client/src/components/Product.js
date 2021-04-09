import React from 'react';

const Product = (props) => {
    console.log(props);
    return (
        <div>
            Product with id {props.match.params.id} and price ₹{props.location.search.slice(1)}
        </div>
    );
};

export default Product;