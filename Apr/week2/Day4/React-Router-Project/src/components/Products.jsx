import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const localStorageProducts = JSON.parse(localStorage.getItem("products"));
        setProducts(localStorageProducts)
    }, [])


    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                products?.map((product) => (
                    <div className='p-5 border shadow-xl'>
                        <strong>{product?.name}</strong>
                        <p>{product?.price}</p>
                        <p>{product?.desc}</p>
                        <button
                            className=' mt-3 text-white p-2 bg-purple-700 rounded-lg'
                            onClick={() => navigate(`/product-detail/${product?.id}`)}
                        >view details</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products