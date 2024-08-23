 import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();


  // For this.props.history.push
  // const handleSave = () => {
  //   navigate('/products');
  // };

   // For this.props.history.replace
  const handleSave = () => {
    navigate('/products', { replace: true });
  };


  return (
    <div>
      <h1>Product Details - {id}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default ProductDetails;