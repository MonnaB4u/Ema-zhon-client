import React from 'react';
import Inventory from '../../Inventory/Inventory';
import DashBoard from '../DashBoard/DashBoard';

const AddProduct = () => {
    return (
        <div className="row">
            <div className="col-md-3 ml-5 m-3">
                <DashBoard></DashBoard>
            </div>

            <div className="col-md-7 ml-5 m-3 mt-5">
               <Inventory></Inventory>
            </div>
        </div>
    );
};

export default AddProduct;