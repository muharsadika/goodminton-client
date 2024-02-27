import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

export const StringContext = createContext();

export const StringProvider = ({ children }) => {
  const [filterName, setFilterName] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  return (
    <StringContext.Provider value={{ filterName, setFilterName, minPrice, setMinPrice, maxPrice, setMaxPrice }}>
      {children}
    </StringContext.Provider>
  );
};

StringProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useStringContext = () => useContext(StringContext);
