import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/ViewCart.css'

function ViewCart() {
  const userJson = localStorage.getItem("user");
    const {userId} = JSON.parse(userJson);

  const [data, setData] = useState({
    userId: '',
    orderSummary: {
      orderedProduct: [],
      grandTotal: 0
    },
    cartSummary: {
      cartProduct: [],
      totalPrice: 0
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9294/user/view_Cart/${userId}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
       <div className='item-container'>
        {data.cartSummary.cartProduct.map((product, index) => (
          <tr key={index}>
          <div className='card'>
            <img src={'data:image/jpeg;base64,'+product.image} height={20} width={20} alt='' />
            <p style={{fontSize:"12px"}}>{product.brand}</p>
            <p style={{fontSize:"12px"}}>{product.description}</p>
            <p style={{fontSize:"12px"}}>{product.brand}</p>
            <p style={{fontSize:"12px"}}>{product.price}</p>
          </div>

   </tr>
   
   ))}
   </div>
   </div>
  );
}

export default ViewCart;