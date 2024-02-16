import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRacket } from '../hook/useRacket';
import { useRacketContext } from '../RacketContext';

function CardRacket() {
  const { data: rackets, isLoading, isError } = useRacket();
  const [visibleRackets, setVisibleRackets] = useState(6);
  const { filterName, minPrice, maxPrice } = useRacketContext();

  useEffect(() => {
    if (rackets) {
      setVisibleRackets(rackets.length);
    }
  }, [rackets]);

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
        {filteredRackets.slice(0, visibleRackets).map((racket, index) => (
          <Link to={`/rackets/${racket.id}`} key={index}>
            <div key={index} className="flex flex-col gap-3 border rounded-xl overflow-hidden">
              <div className="flex justify-center">
                <img src={racket.product_image_1} alt={racket.product_name} className="w-72" />
              </div>
              <div className="flex flex-col m-auto text-justify gap-1 text-md py-3">
                <p className="text-lg font-bold">{racket.product_name}</p>
                <p className="text-xs italic">{racket.product_color}</p>
                <p className="text-md mt-3" style={{ fontFamily: 'fantasy' }}>Rp {new Intl.NumberFormat('id-ID').format(racket.product_price)}</p>
              </div>
            </div>
          </Link>
        ))}
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
