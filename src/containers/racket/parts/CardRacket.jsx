import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRackets } from '../hook/useRackets';
import { useRacketContext } from '../RacketContext';
import { useCart } from '../hook/useCart';

function CardRacket() {
  const { data: rackets, isLoading, isError } = useRackets();
  const { addToCart } = useCart()
  const [visibleRackets, setVisibleRackets] = useState(6);
  const { filterName, minPrice, maxPrice } = useRacketContext();
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const filteredRackets = rackets.filter(racket =>
    racket.product_name.toLowerCase().includes(filterName.toLowerCase()) &&
    (minPrice === 0 || racket.product_price >= Number(minPrice)) &&
    (maxPrice === 0 || racket.product_price <= Number(maxPrice))
  );

  const remainingRackets = filteredRackets.length - visibleRackets;

  const handleLoadMore = () => {
    setVisibleRackets(prevVisibleRackets => prevVisibleRackets + 6);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="text-5xl font-semibold">
        <p>RACKET</p>
      </div>
      <div className="grid grid-cols-3 gap-x-10 gap-y-10">
        {filteredRackets.slice(0, visibleRackets).map((racket, index) => {
          const description = racket.product_description;
          let color = description.split(',').find(item => item.trim().startsWith('Color'));
          color = color ? color.replace('Color:', '') : '';
          return (
            <div key={index} className="flex flex-col gap-3 border rounded-xl">
              <div className="flex justify-center">
                <Link to={`/rackets/${racket.id}`} key={index}>
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
                  <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="text-center border rounded text-gray-400 py-1 px-5 w-full" />
                </div>
                <div className="w-1/2">
                  <button onClick={() => addToCart(racket.id, quantity)} className=" w-full border rounded bg-black text-white text-xs py-2 px-5 hover:bg-gray-800 cursor-pointer">Add to Cart</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {remainingRackets > 0 && (
        <div className="flex justify-center mt-5">
          <button onClick={handleLoadMore} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Load More ({remainingRackets})</button>
        </div>
      )}
    </div>
  );
}

export default CardRacket;
