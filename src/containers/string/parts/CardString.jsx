import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStrings } from '../hook/useString';
import { useStringContext } from '../StringContext';
import { useCart } from '../../cart/hook/useCart';

function CardString() {
  const { data: strings, isLoading, isError } = useStrings();
  const { addToCart } = useCart()
  const [visibleStrings, setVisibleStrings] = useState(6);
  const { filterName, minPrice, maxPrice } = useStringContext();
  const [quantities, setQuantities] = useState({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const filteredStrings = strings.filter(string =>
    string.product_name.toLowerCase().includes(filterName.toLowerCase()) &&
    (minPrice === 0 || string.product_price >= Number(minPrice)) &&
    (maxPrice === 0 || string.product_price <= Number(maxPrice))
  );

  const remainingStrings = filteredStrings.length - visibleStrings;

  const handleLoadMore = () => {
    setVisibleStrings(prevVisibleStrings => prevVisibleStrings + 6);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="text-5xl font-semibold">
        <p>STRING</p>
      </div>
      <div className="grid grid-cols-3 gap-x-10 gap-y-10">
        {filteredStrings.slice(0, visibleStrings).map((string, index) => {
          const description = string.product_description;
          let color = description.split(',').find(item => item.trim().startsWith('Color'));
          color = color ? color.replace('Color:', '') : '';
          return (
            <div key={index} className="flex flex-col gap-3 border rounded-xl">
              <div className="flex justify-center">
                <Link to={`/strings/${string.id}`} key={index}>
                  <img src={string.product_image_1} alt={string.product_name} className="w-72" />
                </Link>
              </div>
              <div className="uppercase flex flex-col m-auto text-justify gap-1 text-md py-3">
                <p className="text-lg font-bold">{string.product_name} <span className="text-sm font-thin text-gray-400">({string.product_quantity})</span></p>
                <p className="text-xs italic">{color}</p>
                <p className="text-md mt-3" style={{ fontFamily: 'fantasy' }}>Rp {string.product_price.toLocaleString('id-ID', { minimumFractionDigits: 0 })}</p>
              </div>
              <div className='flex flex-row justify-center items-center w-full'>
                <div className="w-1/2">
                  {/* <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="text-center border rounded text-gray-400 py-1 px-5 w-full" /> */}
                  <input type="number" value={quantities[string.id] || 1} onChange={(e) => setQuantities({ ...quantities, [string.id]: Number(e.target.value) })} className="text-center border rounded text-gray-400 py-1 px-5 w-full" />
                </div>
                <div className="w-1/2">
                  {/* <button onClick={() => addToCart(string.id, quantity)} className=" w-full border rounded bg-black text-white text-xs py-2 px-5 hover:bg-gray-800 cursor-pointer">Add to Cart</button> */}
                  <button onClick={() => addToCart(string.id, quantities[string.id] || 1)} className=" w-full border rounded bg-black text-white text-xs py-2 px-5 hover:bg-gray-800 cursor-pointer">Add to Cart</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className=''>
        {remainingStrings > 0 && (
          <div className="flex justify-center mt-40">
            <button onClick={handleLoadMore} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Load More ({remainingStrings})</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardString;