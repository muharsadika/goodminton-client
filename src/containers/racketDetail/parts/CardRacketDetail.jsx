import { useState } from 'react';
import racketsData from '../../../libs/mocks/racket';

function CardRacketDetail() {
  const [visibleRackets, setVisibleRackets] = useState(6); // Menyimpan jumlah raket yang ditampilkan

  const handleLoadMore = () => {
    setVisibleRackets(prevVisibleRackets => prevVisibleRackets + 6); // Menambahkan 6 raket ketika tombol "load more" ditekan
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="text-5xl font-bold">
        <p>RACKET LIST</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5">
        {racketsData.slice(0, visibleRackets).map((racket, index) => (
          <div key={index} className="flex flex-col border rounded-xl overflow-hidden">
            <div className="flex justify-center">
              <img src={racket.imageSrc} alt={racket.name} className="w-72" />
            </div>
            <div className="flex flex-col m-auto text-center gap-1 text-md my-3">
              <p className="font-bold">{racket.name}</p>
              <p className="text-xs">{racket.color}</p>
              <p className="">{racket.price}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleRackets < racketsData.length && (
        <div className="flex justify-center mt-5">
          <button onClick={handleLoadMore} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Load More</button>
        </div>
      )}
    </div>
  );
}

export default CardRacketDetail;
