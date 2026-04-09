import React, { useState } from 'react'

function ProductForm() {

  const [formData, setFormData] = useState({
    id:"",
    name: "",
    price: 0,
    desc: ""
  })

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => (
      {
        ...prev,
        [name]: value,
        id: Date.now()
      }
    ))
  }

  function handleSubmit(e) {
    e.preventDefault();

    let products = JSON.parse(localStorage.getItem("products")) || [];

    console.log(formData)
    products.push(formData);

    localStorage.setItem("products", JSON.stringify(products))

    alert("success data saved")

    setFormData({
      name: "",
      price: 0,
      desc: ""
    })
  }

  return (
    <div>

      <h1>Product form</h1>
      <div className='border p-3'>
        <label htmlFor="">Product Name</label>
        <br />
        <input
          type='text'
          placeholder='Enter the product name'
          className='border border-blue-300 p-2 rounded-md'
          value={formData.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Product Price</label>
        <br />
        <input
          type="number"
          placeholder='Enter the price'
          className='border border-blue-300 p-2 rounded-md'
          value={formData.price}
          name="price"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Product description</label>
        <br />
        <textarea
          name="desc"
          placeholder='write the product description'
          className='border border-blue-300 p-2 rounded-md'
          value={formData.desc}
          onChange={handleChange}
        ></textarea>
        <br />
        <button
          className='p-2  bg-purple-500 rounded-md text-white'
          onClick={handleSubmit}
        >Submit</button>
      </div>

    </div>
  )
}

export default ProductForm