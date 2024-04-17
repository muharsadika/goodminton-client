import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [filterName, setFilterName] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  return (
    <ItemsContext.Provider value={{ filterName, setFilterName, minPrice, setMinPrice, maxPrice, setMaxPrice }}>
      {children}
    </ItemsContext.Provider>
  );
};

ItemsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useItemsContext = () => useContext(ItemsContext);
