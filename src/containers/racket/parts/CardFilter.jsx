import PropTypes from 'prop-types';
import { useState } from 'react';

function CardFilter({ onFilter }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    // Validasi input harga
    if (isNaN(minPrice) || isNaN(maxPrice)) {
      alert('Please enter valid prices.');
      return;
    }

    // Memanggil prop onFilter untuk memberitahu parent component tentang pembaruan filter
    onFilter({ minPrice: parseFloat(minPrice), maxPrice: parseFloat(maxPrice) });
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">Filter by Price:</h2>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border rounded-md p-2"
        />
        <button onClick={handleFilter} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
          Apply
        </button>
      </div>
    </div>
  );
}

CardFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default CardFilter;
