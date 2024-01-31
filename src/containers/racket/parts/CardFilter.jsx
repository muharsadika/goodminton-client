import { useState } from 'react';
import PropTypes from 'prop-types';

function CardFilter({ onFilter }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [name, setName] = useState('');

  const applyFilter = () => {
    const filteredData = {
      minPrice: minPrice === '' ? '' : parseFloat(minPrice),
      maxPrice: maxPrice === '' ? '' : parseFloat(maxPrice),
      name: name.trim().toLowerCase() // Trim whitespace and convert to lowercase for case-insensitive search
    };
    onFilter(filteredData);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    applyFilter();
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
    applyFilter();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    applyFilter();
  };

  return (
    <div className="flex flex-col gap-3" style={{ border: "1px solid red" }}>
      <h2 className="text-lg font-semibold">FILTER BY:</h2>

      <div className="flex gap-3 justify-between" style={{ border: "5px solid pink" }}>
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
          onChange={handleMinPriceChange}
          className="border rounded-md p-2"
        />
        <input
          type="text"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="border rounded-md p-2"
        />
      </div>
    </div>
  );
}

CardFilter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default CardFilter;
