import React, { useEffect, useState } from 'react';

const OrderListMain = () => {
    const [Data, setData] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/allOrder')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])

    

    return (
        <div>
            {
                Data.map((each, index) =>
                    <>
                        <div className="product">
                            <div>
                                <img src={each.img} alt="" />
                            </div>
                            <div>
                                <h3 className="product-name">{each.shipment.name}</h3>
                                <p><small>email: {each.shipment.email}</small></p>
                                <p><small>address: {each.shipment.address}</small></p>
                                <p><small>phone: {each.shipment.phone}</small></p>
                                <br />
                                <p>Order Id:- {each._id}</p>
                            </div>

                        </div>


                    </>
                )
            }
        </div>
    );
};

export default OrderListMain;