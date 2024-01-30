import { useState } from 'react';
import stringsData from '../../../libs/mocks/strings'
import { Link } from 'react-router-dom';

function CardString() {
  const [visibleStrings, setVisibleStrings] = useState(8);

  const remainingStrings = stringsData.length - visibleStrings;

  const handleLoadMore = () => {
    setVisibleStrings(prevVisibleStrings => prevVisibleStrings + 8);
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="text-5xl font-semibold">
        <p>STRINGS</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5">
        {stringsData.slice(0, visibleStrings).map((string, index) => (
          <Link to={`/strings/${string.id}`} key={index}>
            <div key={index} className="flex flex-col border rounded-xl overflow-hidden">
              <div className="flex justify-center">
                <img src={string.imageSrc} alt={string.name} className="w-72" />
              </div>
              <div className="flex flex-col m-auto text-center gap-1 text-md py-3">
                <p className="font-bold">{string.name}</p>
                <p className="text-xs">{string.color}</p>
                <p className="">{string.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {remainingStrings > 0 && (
        <div className="flex justify-center mt-5">
          <button onClick={handleLoadMore} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Load More ({remainingStrings})</button>
        </div>
      )}
    </div>
  );
}

export default CardString;