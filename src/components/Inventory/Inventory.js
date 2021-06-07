import React from 'react';
import { useForm } from 'react-hook-form';
import fakeData from '../../fakeData';
import './Inventory.css'

const Inventory = () => {

    /////

    const { register, handleSubmit, errors } = useForm();

    // const onSubmit = data => {
    //     fetch('http://localhost:5000/addProduct', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     }).then(success => {
    //         if (success) {
    //             alert("Uploaded successfully");
    //         }
    //     })

    // }
    const onSubmit = data => {

        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(success => {

                if (success) {

                    alert('your order placed successfully');
                }
            })
    };

    return (

        <div className="row ml-5">

            <form className="ship-form mr-5" onSubmit={handleSubmit(onSubmit)}>

                <input name="key" ref={register({ required: true })} placeholder="Please Input Product Key" />
                {errors.key && <span className="error">Key is required</span>}

                <input name="name" ref={register({ required: true })} placeholder="input Product Name" />
                {errors.name && <span className="error">Product Name is required</span>}

                <input type="number" name="price" ref={register({ required: true })} placeholder="Input Product Price" />
                {errors.price && <span className="error">Product Price is required</span>}

                <input name="seller" ref={register({ required: true })} placeholder="Input Seller Name" />
                {errors.seller && <span className="error">Seller Name is required</span>}

                <input type="number" name="shipping" ref={register({ required: true })} placeholder="Input Shipping Price" />
                {errors.shipping && <span className="error">Shipping Price is required</span>}

                <input name="img" ref={register({ required: true })} placeholder="Input Image Link" />
                {errors.img && <span className="error">Image Link is required</span>}

                <input type="submit" />

            </form>

        </div>
    );
};

export default Inventory;