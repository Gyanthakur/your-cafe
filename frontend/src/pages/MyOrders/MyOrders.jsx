import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
import { assets } from '../../assets/frontend_assets/assets';

const MyOrders = () => {

    const {url , token} = useContext(StoreContext);
    const [data , setData] = useState([]);
    
    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userorders", {} , {headers:{token}});                   
        // Assuming 'response.data.data' is an array and each object has a 'date' field
        const sortedData = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Set the sorted data
        setData(sortedData);
        console.log(response.data.data);
        console.log(data);
        
        
    }

    useEffect(()=> {
        if(token){
            fetchOrders();
        }

    } , [token])

  return (
    <div className='my-orders' >
        <h2>My Orders</h2>
        <div className="container">
        {
            data.map((order, index) => 
                 (
                    <div key={index} className='my-orders-order'>
                        <img src={assets.parcel_icon} alt="" />
                        <p>
                            {order.items.map((item, idx) =>
                                idx === order.items.length - 1
                                    ? `${item.name} X ${item.quantity}`
                                    : `${item.name} X ${item.quantity}, `
                            )}
                        </p>
                        <p>Rs{order.amount}</p>
                        <p>Items: {order.items.length}</p>
                        <p>
                            <span>&#x25cf;</span><b>{order.status}</b>
                        </p>
                        <button onClick={fetchOrders} >Track Order</button>
                    </div>
                ) 
            )
        }
        </div>
    </div>
  )
}

export default MyOrders