import { useState } from 'react';
import Swal from 'sweetalert2';
import { API } from '../../../utils/API';

export function useCart() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCart = async (productId, quantity) => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.post(`/buyer/auth/add-cart`, {
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
        const response = await API.delete(`/buyer/auth/delete-cart/${cartId}`, {
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

  return {
    addToCart,
    deleteFromCart,
    loading,
    error
  };
}