import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CardRacket({ rackets }) {
  const [visibleRackets, setVisibleRackets] = useState(6);

  const remainingRackets = rackets.length - visibleRackets;

  const handleLoadMore = () => {
    setVisibleRackets(prevVisibleRackets => prevVisibleRackets + 6);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="text-5xl font-semibold">
        <p>RACKET</p>
      </div>
      <div className="grid grid-cols-3 gap-x-10 gap-y-10">
        {rackets.slice(0, visibleRackets).map((racket, index) => (
          <Link to={`/rackets/${racket.id}`} key={index}>
            <div key={index} className="flex flex-col gap-3 border rounded-xl overflow-hidden">
              <div className="flex justify-center">
                <img src={racket.imageSrc} alt={racket.name} className="w-72" />
              </div>
              <div className="flex flex-col m-auto text-justify gap-1 text-md py-3">
                <p className="text-lg font-bold">{racket.name}</p>
                <p className="text-xs italic">{racket.color}</p>
                <p className="text-md mt-3" style={{ fontFamily: 'fantasy' }}>Rp {new Intl.NumberFormat('id-ID').format(racket.price)}</p>
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
