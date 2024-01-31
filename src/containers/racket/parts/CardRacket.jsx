import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardRacket({ rackets }) {
  const [visibleRackets, setVisibleRackets] = useState(8);

  const remainingRackets = rackets.length - visibleRackets;

  const handleLoadMore = () => {
    setVisibleRackets(prevVisibleRackets => prevVisibleRackets + 8);
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="text-5xl font-semibold">
        <p>RACKET</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5">
        {rackets.slice(0, visibleRackets).map((racket, index) => (
          <Link to={`/rackets/${racket.id}`} key={index}>
            <div key={index} className="flex flex-col border rounded-xl overflow-hidden">
              <div className="flex justify-center">
                <img src={racket.imageSrc} alt={racket.name} className="w-72" />
              </div>
              <div className="flex flex-col m-auto text-center gap-1 text-md py-3">
                <p className="font-bold">{racket.name}</p>
                <p className="text-xs">{racket.color}</p>
                <p className="">{racket.price}</p>
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

CardRacket.propTypes = {
  rackets: PropTypes.array.isRequired,
};

export default CardRacket;
