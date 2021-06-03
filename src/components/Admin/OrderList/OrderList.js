import React from 'react';
import DashBoard from '../DashBoard/DashBoard';
import OrderListMain from './OrderListMain';

const OrderList = () => {
    return (
        <div className="row">
            <div className="col-md-3 ml-5 m-3">
                <DashBoard></DashBoard>
            </div>

            <div className="col-md-7 ml-5 m-3 mt-5">
               <OrderListMain></OrderListMain>
            </div>
        </div>
    );
};

export default OrderList;