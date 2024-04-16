import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

export const ShirtContext = createContext();

export const ShirtProvider = ({ children }) => {
  const [filterName, setFilterName] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  return (
    <ShirtContext.Provider value={{ filterName, setFilterName, minPrice, setMinPrice, maxPrice, setMaxPrice }}>
      {children}
    </ShirtContext.Provider>
  );
};

ShirtProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useShirtContext = () => useContext(ShirtContext);
