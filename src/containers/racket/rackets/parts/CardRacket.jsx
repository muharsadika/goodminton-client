import { useState } from 'react';
import { useRackets } from '../hook/useRackets';
import { useRacketContext } from '../RacketContext';
import { useCart } from '../../../cart/hook/useCart';
import ClipLoader from "react-spinners/ClipLoader";
import CardRacketItem from './CardRacketItem';

function CardRacket() {
  const { data: rackets, isLoading, isError } = useRackets();
  const { addToCart } = useCart()
  const [visibleRackets, setVisibleRackets] = useState(8);
  const { filterName, minPrice, maxPrice } = useRacketContext();

  if (isLoading) {
    return <div><ClipLoader /></div>;
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
    setVisibleRackets(prevVisibleRackets => prevVisibleRackets + 8);
  };

  return (
    <div className="flex flex-col">
      <div className="text-5xl font-semibold mb-40">
        <p>YONEX RACKET</p>
      </div>

      <div className="grid grid-cols-4 gap-x-20 gap-y-20">
        {filteredRackets.slice(0, visibleRackets).map((racket, index) => (
          <CardRacketItem
            key={index}
            racket={racket}
            addToCart={addToCart}
          />
        ))}
      </div>

      <div className=''>
        {remainingRackets > 0 && (
          <div className="flex justify-center mt-20">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-[#222] text-white rounded-full hover:bg-gray-800"
            >
              Load More ({remainingRackets})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardRacket;