import { useState } from 'react';
import axios from 'axios';

export function useCart() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCart = async (productId, quantity) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:5000/api/buyer/auth/add-cart', {
      // const response = await axios.post('https://goodminton-server.onrender.com/api/buyer/auth/add-cart', {
        product_id: productId,
        product_quantity: quantity
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setLoading(false);
      window.location.reload();
      return response.data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const deleteFromCart = async (cartId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.delete(`http://localhost:5000/api/buyer/auth/delete-cart/${cartId}`, {
      // const response = await axios.delete(`https://goodminton-server.onrender.com/api/buyer/auth/delete-cart/${cartId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setLoading(false);
      window.location.reload();
      return response.data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { addToCart, deleteFromCart, loading, error };
}



// // useCart.js
// import { useDispatch } from 'react-redux';
// import { addProductToCart, removeProductFromCart } from '../../../redux/slice/cartSlice';

// const useCart = () => {
//   const dispatch = useDispatch();

//   const addToCart = (product) => {
//     dispatch(addProductToCart(product));
//   };

//   const deleteFromCart = (productId) => {
//     dispatch(removeProductFromCart(productId));
//   };

//   return { addToCart, deleteFromCart };
// };

// export default useCart;