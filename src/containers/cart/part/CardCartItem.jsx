// Komponen CartItem
// import { useState } from "react";
import { useCart } from "../hook/useCart"
import PropTypes from 'prop-types';
import { useUpdateCartQuantity } from "../hook/useUpdateCartQuantity";

CardCartItem.propTypes = {
  cart: PropTypes.object.isRequired,
}

function CardCartItem({ cart }) {
  const [quantity, setQuantity] = useUpdateCartQuantity(cart.id, cart.product_quantity);
  const subtotal = cart.product.product_price * quantity;

  const { deleteFromCart } = useCart()
  // const [quantity, setQuantity] = useState(cart.product_quantity); // Gunakan nilai awal quantity dari cart
  // const subtotal = cart.product.product_price * quantity; // Hitung subtotal berdasarkan quantity

  return (
    <tr key={cart.id} className="text-left">
      <td><img src={cart.product.product_image_1} alt={cart.product.product_name} className="w-52 border rounded p-3 bg-gray-50" /></td>
      <td>{cart.product.product_name}</td>
      <td>Rp {(cart.product.product_price).toLocaleString('id-ID', { minimumFractionDigits: 0 })}</td>
      <td><input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="border border-gray-300 text-gray-400 rounded py-1 px-5 w-20" /></td>
      <td>Rp {(subtotal).toLocaleString('id-ID', { minimumFractionDigits: 0 })}</td>
      <td><button onClick={() => deleteFromCart(cart.id)} className="bg-red-600 text-white rounded text-xs py-1 px-2 hover:bg-red-700">Remove</button></td>
    </tr>
  )
}

export default CardCartItem;
