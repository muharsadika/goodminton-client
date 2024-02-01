import { useState } from 'react';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';

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
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">Rp</span>
          </div>
          <NumericFormat
            thousandSeparator={'.'}
            decimalSeparator={','}
            // prefix={'Rp '}
            // placeholder="Rp 0"
            placeholder="0"
            onValueChange={(values) => {
              const { value } = values;
              handlePriceChange(setMinPrice, value);
            }}
            className="border rounded-md p-2 w-full hover:border-gray-500 py-1.5 pl-10 pr-20"
          />
        </div>

        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">Rp</span>
          </div>
          <NumericFormat
            thousandSeparator={'.'}
            decimalSeparator={','}
            // prefix={'Rp '}
            // placeholder="Rp 99.999.999"
            placeholder="99.999.999"
            onValueChange={(values) => {
              const { value } = values;
              handlePriceChange(setMaxPrice, value);
            }}
            className="border rounded-md p-2 w-full hover:border-gray-500 py-1.5 pl-10 pr-20"
          />
        </div>

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