import { useState, useCallback } from 'react';

export function useFilter(initialData) {
  const [filteredData, setFilteredData] = useState(initialData);

  const handleFilterChange = useCallback((filters) => {
    const { minPrice, maxPrice, name } = filters;

    let filtered = initialData.filter(item => {
      const isPriceInRange =
        (minPrice === '' || parseFloat(item.price) >= minPrice)
        &&
        (maxPrice === '' || parseFloat(item.price) <= maxPrice)

      const isNameMatch = !name || item.name.toLowerCase().includes(name.toLowerCase());

      return isPriceInRange && isNameMatch;
    });

    setFilteredData(filtered);
  }, [initialData]);

  return { filteredData, handleFilterChange };
}