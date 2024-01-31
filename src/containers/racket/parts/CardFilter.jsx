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

  const handleSearch = () => {
    onFilter({ minPrice: '', maxPrice: '', name });
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold">Filter by:</h2>
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
        <button onClick={handleApplyPriceFilter} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
          Apply Price Filter
        </button>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search by Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-md p-2"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
          Search
        </button>
      </div>
    </div>
  );
}



CardFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default CardFilter;
