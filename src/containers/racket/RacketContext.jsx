import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

export const RacketContext = createContext();

export const RacketProvider = ({ children }) => {
  const [filterName, setFilterName] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  return (
    <RacketContext.Provider value={{ filterName, setFilterName, minPrice, setMinPrice, maxPrice, setMaxPrice }}>
      {children}
    </RacketContext.Provider>
  );
};

RacketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useRacketContext = () => useContext(RacketContext);
