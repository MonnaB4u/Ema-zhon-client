import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useHistory } from 'react-router';
import Header from '../Header/Header';

const Shipment = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory()

  const onSubmit = data => {
    const savedCart = getDatabaseCart();

    const orderDetails = { ...loggedInUser, products: savedCart, shipment: data, orderTime: new Date() };
    
    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })

      .then(res => res.json())
      .then(success => {

        if (success) {

          alert('your order placed successfully');
        }
      })
    history.push('/sucess')
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
      <Header></Header>
      <div className="container">

        <h1 className="blockk">Confirm Your Order</h1>
        <form className="ship-form mr-5" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
          {errors.name && <span className="error">Name is required</span>}

          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className="error">Email is required</span>}

          <input name="address" ref={register({ required: true })} placeholder="Your Address" />
          {errors.address && <span className="error">Address is required</span>}

          <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
          {errors.phone && <span className="error">Phone Number is required</span>}

          <input type="submit" />

        </form>
      </div>
    </div>
  );
};

export default Shipment;