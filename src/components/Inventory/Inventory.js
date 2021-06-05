import React from 'react';
import { useForm } from 'react-hook-form';
import fakeData from '../../fakeData';
import './Inventory.css'

const Inventory = () => {

    /////

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(success => {
            if (success) {
                alert("Uploaded successfully");
            }
        })
      
    }
    return (

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