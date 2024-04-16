import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../../redux/slice/profileSlice"
import { useEffect } from "react"
import axios from "axios"
import Swal from 'sweetalert2';

function useCheckout() {
  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch()

  // snap embed for using window.snap.pay
  useEffect(() => {
    const snapScript = 'https://app.sandbox.midtrans.com/snap/snap.js';
    const clientKey = import.meta.env.VITE_REACT_APP_MIDTRANS_PAYMET_API_LOCALHOST;
    const script = document.createElement('script');
    script.src = snapScript;
    script.setAttribute('data-client-key', clientKey);
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // get profile
  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])
  console.log(profile);

  const handleCheckout = async () => {
    // Tampilkan konfirmasi SweetAlert2 sebelum melanjutkan ke pembayaran
    const confirmation = await Swal.fire({
      icon: 'question',
      title: 'Confirmation',
      text: 'Are you sure you want to proceed to payment?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    });

    if (confirmation.isConfirmed) {
      const data = {
        id: profile.id,
        first_name: profile.fullname,
        email: profile.email,
        phone: profile.phone,
        address: profile.address,
        gross_amount: profile.carts.cart_total_price,
        cart_details: profile.carts.items
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      try {
        const response = await axios.post(
          import.meta.env.VITE_REACT_APP_MIDTRANS_PAYMET_API_LOCALHOST,
          data,
          config
        );
        const token = response.data.data.token;
        window.snap.pay(token);
      } catch (error) {
        // Tampilkan alert SweetAlert2 untuk memberi tahu pengguna bahwa terjadi kesalahan saat melakukan pembayaran
        await Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to proceed with payment. Please try again later.',
          confirmButtonText: 'Ok'
        });
      }
    } else {
      // Tampilkan alert SweetAlert2 bahwa pembayaran dibatalkan oleh pengguna
      await Swal.fire({
        icon: 'info',
        title: 'Cancelled',
        text: 'Payment cancelled!',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };


  // // handle checkout with midtrans
  // const handleCheckout = async () => {
  //   const data = {
  //     first_name: profile.fullname,
  //     email: profile.email,
  //     phone: profile.phone,
  //     address: profile.address,
  //     gross_amount: profile.carts.cart_total_price,
  //   }
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   }
  //   const response = await axios.post(
  //     import.meta.env.VITE_REACT_APP_MIDTRANS_PAYMET_API_LOCALHOST,
  //     data,
  //     config
  //   )
  //   const token = response.data.data.token
  //   window.snap.pay(token)
  // }

  return { handleCheckout, profile }
}

export default useCheckout