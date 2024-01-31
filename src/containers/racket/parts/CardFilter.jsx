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

  return (
    <div className="flex flex-col gap-3" style={{ border: "1px solid red" }}>

      <h2 className="text-lg font-semibold">FILTER BY:</h2>

      <div className="flex gap-3 justify-between overflow-y-auto" style={{ border: "5px solid pink" }}>
        <input
          type="text"
          placeholder="Search by Product Name"
          value={name}
          onChange={handleNameChange}
          className="border rounded-md p-2"
        />
      </div>

      <div className="flex flex-col gap-3" style={{ border: "5px solid blue" }}>
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

    </div>
  );
}

CardFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default CardFilter;
