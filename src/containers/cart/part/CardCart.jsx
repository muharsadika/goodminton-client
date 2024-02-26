// Komponen CardCart
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../../redux/slice/profileSlice"
import CardCartItem from "./CardCartItem"
import axios from "axios"



function CardCart() {
  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  // console.log(profile);

  const handleCheckout = async () => {
    const data = {
      firstname: profile.fullname,
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

    const paymentUrl = response.data.data.redirect_url
    // console.log(paymentUrl);
    window.location.href = paymentUrl
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


// import { useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { getProfile } from "../../../redux/slice/profileSlice"
// import { useCart } from "../../racket/hook/useCart"

// function CardCart() {
//   const profile = useSelector(state => state.profile)
//   const dispatch = useDispatch()
//   const { deleteFromCart } = useCart()

//   useEffect(() => {
//     const interval = setInterval(() => {
//       dispatch(getProfile())
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [dispatch])

//   return (
//     <div className="flex flex-row">
//       <div className="w-[70%] border-r-[1px] border-gray-200 h-screen">
//         <table className="table table-auto border border-x-0">
//           <thead className="border border-l-0 border-r-0 bg-gray-50">
//             <tr className="text-left">
//               <th></th>
//               <th>Product</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Subtotal</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {(profile.carts).map(cart => (
//               <tr key={cart.id} className="text-left">
//                 <td><img src={cart.product.product_image_1} alt={cart.product.product_name} className="w-52 border rounded p-3 bg-gray-50" /></td>
//                 <td>{cart.product.product_name}</td>
//                 <td>Rp {(cart.product.product_price).toLocaleString('id-ID', { minimumFractionDigits: 0 })}</td>
//                 <td><input type="number" placeholder={cart.product_quantity} className="border border-gray-300 text-gray-400 rounded py-1 px-5 w-20" /></td>
//                 <td>Rp {(cart.product.product_price * cart.product_quantity).toLocaleString('id-ID', { minimumFractionDigits: 0 })}</td>
//                 <td><button onClick={() => deleteFromCart(cart.id)} className="bg-red-600 text-white rounded text-xs py-1 px-2 hover:bg-red-700">Remove</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="border-l-[1px] border-gray-200 h-screen pl-5">
//         <p>Total</p>
//         <p>Rp {(profile.total).toLocaleString('id-ID', { minimumFractionDigits: 0 })}</p>
//       </div>
//     </div>
//   )
// }

// export default CardCart




































// <div className="flex flex-col gap-10">
//   <div className="border border-l-0 border-r-0 py-5">
//     <ul className="grid grid-cols-5">
//       <li className="">
//       </li>
//       <li className="flex justify-end mr-5">
//         Product
//       </li>
//       <li className="flex justify-end mr-5">
//         price
//       </li>
//       <li className="flex justify-end mr-5">
//         Quantity
//       </li>
//       <li className="flex justify-end mr-5">
//         Subtotal
//       </li>
//     </ul>
//   </div>

//   <div className="flex flex-col gap-10">
//     {(profile.carts).map(cart => (
//       <div key={cart.id} className="grid grid-cols-5 border border-black">
//         {/* <p>{cart.product.product_image_1}</p> */}
//         <img className="w-40 flex justify-center col-span-2 border border-red-500" src={cart.product.product_image_1} alt={cart.product.product_name} />
//         <p className="flex justify-end border border-red-500">{cart.product.product_name}</p>
//         <p className="flex justify-end border border-red-500">{cart.product_quantity}</p>
//       </div>
//     ))}
//   </div>
// </div>