import React from 'react';
import './DashBoard.css'
const DashBoard = () => {
    return (
        <div className="col-md-3  dash"
            style={
                {
                    minHeight: '100vh',
                    minWidth: '250px'
                }
            }>
            <ul class=" mb-2">

                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/">Home</a>
                </li>
                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/addProduct">Add Product</a>
                </li>
                <li class="nav-item nav">
                    <a style={
                        { color: 'black' }
                    }
                        class="nav-link "
                        aria-current="page"
                        href="/orderList">Order List</a>
                </li>
              

               
              
            </ul>
        </div>
    );
};

export default DashBoard;