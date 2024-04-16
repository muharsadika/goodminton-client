import { useStringContext } from '../StringContext';
import { NumericFormat } from 'react-number-format';

function CardStringFilter() {
  const {
    filterName,
    setFilterName,
    setMinPrice,
    setMaxPrice,
  } = useStringContext();

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value);
  };

  const handleFilterPriceChange = (setPrice, value) => {
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
              handleFilterPriceChange(setMinPrice, value);
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
              handleFilterPriceChange(setMaxPrice, value);
            }}
            className="border rounded-md p-2 w-full hover:border-gray-500 py-1.5 pl-10 pr-20"
          />
        </div>

      </div>
    </div>
  );
}

export default CardStringFilter;