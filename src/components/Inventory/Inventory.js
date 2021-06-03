import React from 'react';
import { useForm } from 'react-hook-form';
import './Inventory.css'

const Inventory = () => {
    // const handleAddProduct = () => {
    //     const product = {};
    //     fetch('http://localhost:5000/addProduct', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })
    // }

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const product = {};
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })

            .then(success => {
                if (success) {
                    alert("Uploaded successfully");
                }
            })

    }
    return (
        // <div className="boxInputmain justify-content-center">
        //     <form action="" >

        //         {/* <p><span>price: </span><input className="boxInput"  type="text"/></p>
        //         <p><span>Quantity:</span><input  className="boxInput" type="text"/></p>
        //         <p><span>Please Use Pucture link</span><input className="boxInput"  type="text"/></p>
        //        <button className="btn-add" onClick={handleAddProduct}>Add Product</button> */}

        //         <input className="input-field" type="text" name="name" id="" placeholder="Product Name" required />
        //         <input className="input-field" type="text" name="Quantity" id="" placeholder="Quantity" required />
        //         <input className="input-field" type="text" name="" id="" placeholder="Please Use Pucture link" required />
        //         <button className="btn-add" onClick={handleAddProduct}>Add Product</button>


        //     </form>

        // </div>
        <div className="row ml-5">

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <input type="text" {...register('key', { required: true })} name="key" placeholder="Please Input Product Key" className="form-control" />
                </div>

                <div className="form-group">
                    <input type="text" {...register('name', { required: true })} name="name" placeholder="input Product Name" className="form-control" />
                </div>

                <div className="form-group">
                    <input type="text" {...register('price', { required: true })} name="price" placeholder="Input Product Price" className="form-control" />
                </div>

                <div className="form-group">
                    <input type="text" {...register('shipping', { required: true })} name="shipping" placeholder="Input Shipping Price" className="form-control" />
                </div>

                <div className="form-group">
                    <input type="text" {...register('img', { required: true })} name="img" placeholder="Input Image Link" className="form-control" />
                </div>




                <div className="form-group text-centet ml-0 mt-5">
                    <button type="submit" class="btn btn-warning">Send</button>
                </div>
            </form>


        </div>
    );
};

export default Inventory;