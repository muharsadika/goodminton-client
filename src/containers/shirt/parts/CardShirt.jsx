import { useState } from 'react'; String
import { Link } from 'react-router-dom';
import { useShirts } from '../hook/useShirt';
import { useShirtContext } from '../ShirtContext';
import { useCart } from '../../cart/hook/useCart';
import ClipLoader from "react-spinners/ClipLoader";


function CardShirt() {

  const { data: shirts, isLoading, isError } = useShirts();
  const { addToCart } = useCart()
  const [visibleShirts, setVisibleShirts] = useState(6);
  const { filterName, minPrice, maxPrice } = useShirtContext();
  const [quantities, setQuantities] = useState({});

  if (isLoading) {
    return <div><ClipLoader /></div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const filteredShirts = shirts.filter(shirt =>
    shirt.product_name.toLowerCase().includes(filterName.toLowerCase()) &&
    (minPrice === 0 || shirt.product_price >= Number(minPrice)) &&
    (maxPrice === 0 || shirt.product_price <= Number(maxPrice))
  );

  const remainingShirts = filteredShirts.length - visibleShirts;

  const handleLoadMore = () => {
    setVisibleShirts(prevVisibleShirts => prevVisibleShirts + 6);
  };


  return (
    <div className="flex flex-col gap-10">
      <div className="text-5xl font-semibold">
        <p>STRING</p>
      </div>
      <div className="grid grid-cols-3 gap-x-10 gap-y-10">
        {filteredShirts.slice(0, visibleShirts).map((shirt, index) => {
          const description = shirt.product_description;
          let color = description.split(',').find(item => item.trim().startsWith('Color'));
          color = color ? color.replace('Color:', '') : '';
          return (
            <div key={index} className="flex flex-col gap-3 border rounded-xl">
              <div className="flex justify-center">
                <Link to={`/shirts/${shirt.id}`} key={index}>
                  <img src={shirt.product_image_1} alt={shirt.product_name} className="w-72" />
                </Link>
              </div>
              <div className="uppercase flex flex-col m-auto text-justify gap-1 text-md py-3">
                <p className="text-lg font-bold">{shirt.product_name} <span className="text-sm font-thin text-gray-400">({shirt.product_quantity})</span></p>
                <p className="text-xs italic">{color}</p>
                <p className="text-md mt-3" style={{ fontFamily: 'fantasy' }}>Rp {shirt.product_price.toLocaleString('id-ID', { minimumFractionDigits: 0 })}</p>
              </div>
              <div className='flex flex-row justify-center items-center w-full'>
                <div className="w-1/2">
                  <input type="number" value={quantities[shirt.id] || 1} onChange={(e) => setQuantities({ ...quantities, [shirt.id]: Number(e.target.value) })} className="text-center border rounded text-gray-400 py-1 px-5 w-full" />
                </div>
                <div className="w-1/2">
                  <button onClick={() => addToCart(shirt.id, quantities[shirt.id] || 1)} className=" w-full border rounded bg-black text-white text-xs py-2 px-5 hover:bg-gray-800 cursor-pointer">Add to Cart</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className=''>
        {remainingShirts > 0 && (
          <div className="flex justify-center mt-40">
            <button onClick={handleLoadMore} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Load More ({remainingShirts})</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardShirt;