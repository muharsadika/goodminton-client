import { useState } from 'react';
import PropTypes from 'prop-types';

function CardFilter({ onFilter }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [name, setName] = useState('');

  const handleApplyPriceFilter = () => {
    if ((minPrice !== '' && isNaN(minPrice)) || (maxPrice !== '' && isNaN(maxPrice))) {
      alert('Please enter valid prices.');
      return;
    }

    onFilter({ minPrice: parseFloat(minPrice), maxPrice: parseFloat(maxPrice), name });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    onFilter({ minPrice: '', maxPrice: '', name: e.target.value });
  };

  const handlePriceChange = (setPrice, price) => {
    setPrice(price);
    if (price === '') {
      onFilter({ minPrice: '', maxPrice: '', name });
    }
  };


  return (
    <div className="flex flex-col gap-20 py-32">

      {/* <p className="text-5xl font-semibold">
        FILTER BY:
      </p> */}

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search..."
          value={name}
          onChange={handleNameChange}
          className="border rounded-md p-2 w-full hover:border-gray-500"
        />
      </div>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Rp 0"
          value={minPrice}
          onChange={(e) => handlePriceChange(setMinPrice, e.target.value)}
          className="border rounded-md p-2 w-full hover:border-gray-500"
        />
        <input
          type="text"
          placeholder="Rp 99.999.999"
          value={maxPrice}
          onChange={(e) => handlePriceChange(setMaxPrice, e.target.value)}
          className="border rounded-md p-2 w-full hover:border-gray-500"
        />
        <button onClick={handleApplyPriceFilter} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
          Apply Price Filter
        </button>
      </div>

    </div>
  );
}

CardFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default CardFilter;
