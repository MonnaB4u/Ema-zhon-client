import React from 'react';
import { useHistory } from 'react-router';
import Header from '../Header/Header';
import './success.css'

const Sucess = () => {

    const history = useHistory()
    const home = () => {
        history.push('/shop')
    }

    return (
        <div>
            <Header></Header>
        <div className="container mt-5">
            <div className="row d-flex justify-content-center p-3">
                <div className="col-md-5 no-match text-center pb-5 buttonForm">
                    <h2>Order successfully </h2>
                    <h3>Thanks For the order</h3>
                    <div className="signuture text-right mr-5">
                        <button onClick={()=> home()}  className="main-button">Back to Home </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Sucess;