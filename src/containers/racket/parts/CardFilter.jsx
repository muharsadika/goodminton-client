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
        <NumericFormat
          thousandSeparator={'.'}
          decimalSeparator={','}
          prefix={'Rp '}
          placeholder="Rp 0"
          onValueChange={(values) => {
            const { value } = values;
            setMinPrice(value);
          }}
          className="border rounded-md p-2 w-full hover:border-gray-500"
        />
        <NumericFormat
          thousandSeparator={'.'}
          decimalSeparator={','}
          prefix={'Rp '}
          placeholder="Rp 99.999.999"
          onValueChange={(values) => {
            const { value } = values;
            setMaxPrice(value);
          }}
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




// import { useState } from 'react';
// import PropTypes from 'prop-types';

// function CardFilter({ onFilter }) {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [name, setName] = useState('');
//   const [displayMinPrice, setDisplayMinPrice] = useState('');
//   const [displayMaxPrice, setDisplayMaxPrice] = useState('');

//   const handleApplyPriceFilter = () => {
//     if ((minPrice !== '' && isNaN(minPrice)) || (maxPrice !== '' && isNaN(maxPrice))) {
//       alert('Please enter valid prices.');
//       return;
//     }

//     onFilter({ minPrice: parseFloat(minPrice), maxPrice: parseFloat(maxPrice), name });
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//     onFilter({ minPrice: '', maxPrice: '', name: e.target.value });
//   };

//   const handlePriceChange = (setPrice, setDisplayPrice, price) => {
//     setPrice(price);
//     setDisplayPrice(price);
//     if (price === '') {
//       onFilter({ minPrice: '', maxPrice: '', name });
//     }
//   };

//   const formatCurrency = (value) => {
//     return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value);
//   };


//   return (
//     <div className="flex flex-col gap-20 py-32">
//       <div className="flex gap-3">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={name}
//           onChange={handleNameChange}
//           className="border rounded-md p-2 w-full hover:border-gray-500"
//         />
//       </div>

//       <div className="flex flex-col gap-3">
//         <input
//           type="text"
//           placeholder="Rp 0"
//           value={displayMinPrice}
//           onChange={(e) => handlePriceChange(setMinPrice, setDisplayMinPrice, e.target.value.replace(/\D/g, ''))}
//           onBlur={(e) => setDisplayMinPrice(formatCurrency(e.target.value))}
//           onFocus={(e) => setDisplayMinPrice(e.target.value.replace(/\D/g, ''))}
//           className="border rounded-md p-2 w-full hover:border-gray-500"
//         />
//         <input
//           type="text"
//           placeholder="Rp 99.999.999"
//           value={displayMaxPrice}
//           onChange={(e) => handlePriceChange(setMaxPrice, setDisplayMaxPrice, e.target.value.replace(/\D/g, ''))}
//           onBlur={(e) => setDisplayMaxPrice(formatCurrency(e.target.value))}
//           onFocus={(e) => setDisplayMaxPrice(e.target.value.replace(/\D/g, ''))}
//           className="border rounded-md p-2 w-full hover:border-gray-500"
//         />
//         <button onClick={handleApplyPriceFilter} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
//           Apply Price Filter
//         </button>
//       </div>

//     </div>
//   );
// }

// CardFilter.propTypes = {
//   onFilter: PropTypes.func.isRequired,
// };

// export default CardFilter;
