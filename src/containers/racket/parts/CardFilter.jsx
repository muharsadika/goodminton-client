// CardFilter.jsx
import { useRacketContext } from "../RacketContext";
import { NumericFormat } from 'react-number-format';

function CardFilter() {
  const {
    filterName,
    setFilterName,
    // minPrice,
    setMinPrice,
    // maxPrice,
    setMaxPrice,
  } = useRacketContext();

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };

  // const handleMinPriceChange = (event) => {
  //   setMinPrice(event.target.value || 0);
  // };

  // const handleMaxPriceChange = (event) => {
  //   setMaxPrice(event.target.value || 0);
  // };

  const handlePriceChange = (setPrice, value) => {
    setPrice(value || 0);
  };

  return (
    <div className="flex flex-col gap-10 py-2">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search..."
          value={filterName}
          onChange={handleFilterNameChange}
          className="border rounded-md p-2 w-full hover:border-gray-500"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">Rp</span>
          </div>
          <NumericFormat
            thousandSeparator={'.'}
            decimalSeparator={','}
            placeholder="0"
            onValueChange={(values) => {
              const { value } = values;
              handlePriceChange(setMinPrice, value);
            }}
            className="border rounded-md p-2 w-full hover:border-gray-500 py-1.5 pl-10 pr-20"
          />
        </div>
        <div className="relative rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">Rp</span>
          </div>
          <NumericFormat
            thousandSeparator={'.'}
            decimalSeparator={','}
            placeholder="9.999.999"
            onValueChange={(values) => {
              const { value } = values;
              handlePriceChange(setMaxPrice, value);
            }}
            className="border rounded-md p-2 w-full hover:border-gray-500 py-1.5 pl-10 pr-20"
          />
        </div>
      </div>
    </div>
  );

}

export default CardFilter;






// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { NumericFormat } from 'react-number-format';

// function CardFilter({ onFilter }) {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [name, setName] = useState('');

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

//   const handlePriceChange = (setPrice, price) => {
//     setPrice(price);
//     if (price === '') {
//       onFilter({ minPrice: '', maxPrice: '', name });
//     }
//   };

//   return (
//     <div className="flex flex-col gap-10 py-2">
//       <div className="flex gap-3">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={name}
//           onChange={handleNameChange}
//           className="border rounded-md p-2 w-full hover:border-gray-500"
//         />
//       </div>

//       <div className="flex flex-col gap-2">
//         <div className="relative rounded-md shadow-sm">
//           <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//             <span className="text-gray-500 sm:text-sm">Rp</span>
//           </div>
//           <NumericFormat
//             thousandSeparator={'.'}
//             decimalSeparator={','}
//             // prefix={'Rp '}
//             // placeholder="Rp 0"
//             placeholder="0"
//             onValueChange={(values) => {
//               const { value } = values;
//               handlePriceChange(setMinPrice, value);
//             }}
//             className="border rounded-md p-2 w-full hover:border-gray-500 py-1.5 pl-10 pr-20"
//           />
//         </div>

//         <div className="relative rounded-md shadow-sm">
//           <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//             <span className="text-gray-500 sm:text-sm">Rp</span>
//           </div>
//           <NumericFormat
//             thousandSeparator={'.'}
//             decimalSeparator={','}
//             // prefix={'Rp '}
//             // placeholder="Rp 99.999.999"
//             placeholder="99.999.999"
//             onValueChange={(values) => {
//               const { value } = values;
//               handlePriceChange(setMaxPrice, value);
//             }}
//             className="border rounded-md p-2 w-full hover:border-gray-500 py-1.5 pl-10 pr-20"
//           />
//         </div>

//         <button onClick={handleApplyPriceFilter} className="text-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 uppercase">
//           Filter By Price
//         </button>
//       </div>
//     </div>
//   );
// }

// CardFilter.propTypes = {
//   onFilter: PropTypes.func.isRequired,
// };

// export default CardFilter;