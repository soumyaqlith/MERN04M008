import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function ProductDetails() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [selectProduct, setSelectProduct] = useState({})

    useEffect(() => {
        const localStorageProducts = JSON.parse(localStorage.getItem("products")) || [];
        setProducts(localStorageProducts);
    }, [])

    useEffect(() => {
        if (products.length > 0) {
            let exProduct = products.find((pro) => pro.id == id);
            setSelectProduct(exProduct);
        }
    }, [products, id]);

    return (
        <div>
            <h1>Product Details</h1>
            <br />
            <strong>Name : {selectProduct?.name}</strong>
            <br />
            <p>Price : {selectProduct?.price}</p>
            <br />
            <p>Description : {selectProduct?.desc}</p>
        </div>
    )
}

export default ProductDetails