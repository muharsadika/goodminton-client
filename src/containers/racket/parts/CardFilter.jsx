import { useRacketContext } from "../RacketContext";
import { NumericFormat } from 'react-number-format';
import { IoIosSearch } from "react-icons/io";


function CardFilter() {

  const {
    filterName,
    setFilterName,
    setMinPrice,
    setMaxPrice,
  } = useRacketContext();

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };

  const handleFilterPriceChange = (setPrice, value) => {
    setPrice(value || 0);
  };


  return (
    <div className="flex flex-col gap-20 p-5 border rounded min-h-screen">
      <div className="flex gap-3 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-lg text-gray-300"><IoIosSearch /></span>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={filterName}
          onChange={handleFilterNameChange}
          className="border rounded-md py-1.5 pl-10 pr-20 w-full text-gray-500 focus:outline-none focus:border-gray-300 hover:shadow-inner"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-lg font-medium text-center">Price</label>
        <div className="flex flex-col gap-1">
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-300 sm:text-sm">Rp</span>
            </div>
            <NumericFormat
              thousandSeparator={'.'}
              decimalSeparator={','}
              placeholder="Min"
              onValueChange={(values) => {
                const { value } = values;
                handleFilterPriceChange(setMinPrice, value);
              }}
              className="border rounded-lg w-full py-1.5 pl-10 pr-20 text-gray-500 focus:outline-none focus:border-gray-300 hover:shadow-inner"
            />
          </div>

          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-300 sm:text-sm">Rp</span>
            </div>
            <NumericFormat
              thousandSeparator={'.'}
              decimalSeparator={','}
              placeholder="Max"

              onValueChange={(values) => {
                const { value } = values;
                handleFilterPriceChange(setMaxPrice, value);
              }}
              className="border rounded-lg w-full py-1.5 pl-10 pr-20 text-gray-500 focus:outline-none focus:border-gray-300 hover:shadow-inner"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default CardFilter;