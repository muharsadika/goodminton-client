import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../../redux/slice/profileSlice"
import CardCartItem from "./CardCartItem"
import useCheckout from "../../cart/hook/useCheckout"

function CardCart() {
  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch()
  const { handleCheckout } = useCheckout()

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  return (
    <div className="flex flex-row" style={{ border: "5px solid red" }}>
      <div className="w-[70%] border-r-[1px] border-gray-200 min-h-screen">
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

      <div className="w-[30%] flex flex-col border-l-[1px] border-gray-200 h-min-screen pl-5 gap-10">
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