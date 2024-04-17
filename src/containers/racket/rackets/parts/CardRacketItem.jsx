import { useState } from "react";
import { Link } from 'react-router-dom';
import { useCart } from '../../../cart/hook/useCart';
import PropTypes from 'prop-types';

CardRacketItem.propTypes = {
  racket: PropTypes.object.isRequired,
}

function CardRacketItem({ racket }) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1); // Buat state quantity yang terpisah untuk setiap item

  const description = racket.product_description;
  let color = description.split(',').find(item => item.trim().startsWith('Color'));
  color = color ? color.replace('Color:', '') : '';

  return (
    <div className="flex flex-col gap-3 border rounded-xl">
      <div className="flex justify-center">
        <Link to={`/category/racket/${racket.id}`}>
          <img src={racket.product_image_1} alt={racket.product_name} className="w-72" />
        </Link>
      </div>
      <div className="uppercase flex flex-col m-auto text-justify gap-1 text-md py-3">
        <p className="text-lg font-bold">{racket.product_name} <span className="text-sm font-thin text-gray-400">({racket.product_quantity})</span></p>
        <p className="text-xs italic">{color}</p>
        <p className="text-md mt-3" style={{ fontFamily: 'fantasy' }}>Rp {racket.product_price.toLocaleString('id-ID', { minimumFractionDigits: 0 })}</p>
      </div>
      <div className='flex flex-row justify-center items-center w-full'>
        <div className="w-1/2">
          <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="text-center border rounded text-gray-400 py-1 px-5 w-full" />
        </div>
        <div className="w-1/2">
          <button onClick={() => addToCart(racket.id, Number(quantity))} className=" w-full border rounded bg-black text-white text-xs py-2 px-5 hover:bg-gray-800 cursor-pointer">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default CardRacketItem;

