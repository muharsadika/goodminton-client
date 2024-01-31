import { useState } from 'react';
import CardRacket from "./parts/CardRacket";
import CardFilter from "./parts/CardFilter";
import racketsData from "../../libs/mocks/rackets"

function RacketContainer() {
  const [filteredRackets, setFilteredRackets] = useState(racketsData);

  const handleFilterChange = (filters) => {
    const { minPrice, maxPrice } = filters;
    const filtered = racketsData.filter(racket => {
      return (minPrice === '' || parseFloat(racket.price) >= minPrice) &&
        (maxPrice === '' || parseFloat(racket.price) <= maxPrice);
    });
    setFilteredRackets(filtered);
  };

  return (
    <div className="flex flex-row gap-5 p-5">
      <div className="w-[20%]" style={{ border: "1px solid red" }}>
        <CardFilter onFilter={handleFilterChange} />
      </div>
      <div className="w-[80%]">
        <CardRacket rackets={filteredRackets} />
      </div>
    </div>
  )
}

export default RacketContainer;
