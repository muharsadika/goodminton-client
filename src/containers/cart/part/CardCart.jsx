import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile } from "../../../redux/slice/profileSlice"

function CardCart() {
  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])

  // console.log(profile);

  return (
    <div>
      <table className="table table-auto border border-l-0 border-r-0 w-[70%]">
        <thead className="border border-l-0 border-r-0">
          <tr className="text-left">
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {(profile.carts).map(cart => (
            <tr key={cart.id} className="text-left">
              <td><img src={cart.product.product_image_1} alt={cart.product.product_name} className="w-52 border rounded p-3 bg-gray-50" /></td>
              <td>{cart.product.product_name}</td>
              <td>Rp {(cart.product.product_price).toLocaleString('id-ID', { minimumFractionDigits: 0 })}</td>
              <td><input type="number" defaultValue={cart.product_quantity} className="border border-gray-300 text-gray-400 rounded py-1 px-5 w-20" /></td>
              <td>Rp {(cart.product.product_price * cart.product_quantity).toLocaleString('id-ID', { minimumFractionDigits: 0 })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
  )
}

export default CardCart