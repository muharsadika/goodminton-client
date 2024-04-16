import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export function useCart() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCart = async (productId, quantity) => {
    setLoading(true);
    setError(null);
    try {
      // const response = await axios.post('http://localhost:5000/api/buyer/auth/add-cart', {
        const response = await axios.post('https://goodminton-server.onrender.com/api/buyer/auth/add-cart', {
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
      // Tampilkan konfirmasi SweetAlert2 sebelum menghapus item dari keranjang
      const confirmation = await Swal.fire({
        icon: 'question',
        title: 'Confirmation',
        text: 'Are you sure you want to delete this item from the cart?',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      });

      if (confirmation.isConfirmed) {
        // const response = await axios.delete(`http://localhost:5000/api/buyer/auth/delete-cart/${cartId}`, {
        const response = await axios.delete(`https://goodminton-server.onrender.com/api/buyer/auth/delete-cart/${cartId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setLoading(false);
        // Tampilkan alert SweetAlert2 untuk memberi tahu pengguna bahwa item berhasil dihapus
        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Item deleted successfully!',
          showConfirmButton: false,
          timer: 1500
        });
        window.location.reload();
        return response.data;
      } else {
        setLoading(false);
        // Tampilkan alert SweetAlert2 bahwa penghapusan item dibatalkan
        await Swal.fire({
          icon: 'info',
          title: 'Cancelled',
          text: 'Deletion cancelled!',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
      // Tampilkan alert SweetAlert2 untuk memberi tahu pengguna bahwa terjadi kesalahan
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err.message,
        confirmButtonText: 'Ok'
      });
    }
  };


  // const deleteFromCart = async (cartId) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const response = await axios.delete(`http://localhost:5000/api/buyer/auth/delete-cart/${cartId}`, {
  //     // const response = await axios.delete(`https://goodminton-server.onrender.com/api/buyer/auth/delete-cart/${cartId}`, {
  //       headers: {
  //         'Authorization': `Bearer ${localStorage.getItem('token')}`
  //       }
  //     });
  //     setLoading(false);
  //     window.location.reload();
  //     return response.data;
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

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