import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../../redux/slice/profileSlice"
import CardCartItem from "./CardCartItem"
import axios from "axios"


function CardCart() {
  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch()

  // snap embed for using window.snap.pay
  useEffect(() => {
    const snapScript = 'https://app.sandbox.midtrans.com/snap/snap.js';
    const clientKey = import.meta.env.VITE_REACT_APP_PAYMENT_API;
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

  // handle checkout with midtrans
  const handleCheckout = async () => {
    const data = {
      first_name: profile.fullname,
      email: profile.email,
      phone: profile.phone,
      address: profile.address,
      gross_amount: profile.carts.cart_total_price,
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
    const response = await axios.post(
      import.meta.env.VITE_REACT_APP_PAYMENT_API,
      data,
      config
    )
    const token = response.data.data.token
    window.snap.pay(token)
  }


  return (
    <div className="flex flex-row">
      <div className="w-[70%] border-r-[1px] border-gray-200 h-screen">
        <table className="table table-auto border border-x-0">
          <thead className="border border-l-0 border-r-0 bg-gray-50">
            <tr className="text-left">
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(profile.carts.items).map(cart => (
              <CardCartItem cart={cart} key={cart.id} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-[30%] flex flex-col border-l-[1px] border-gray-200 h-screen pl-5 gap-10">
        <div className="">
          <p>Total Quantity</p>
          <p>{profile.carts.cart_total_quantity}</p>
        </div>
        <div className="">
          <p>Total Price</p>
          <p>Rp {(profile.carts.cart_total_price).toLocaleString('id-ID', { minimumFractionDigits: 0 })}</p>
        </div>
        <div className="">
          <button
            onClick={handleCheckout}
            className="w-full border rounded bg-black text-white text-xs py-2 px-5 hover:bg-gray-800 cursor-pointer"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardCart;