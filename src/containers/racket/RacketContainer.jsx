import { useState } from 'react';
import CardRacket from "./parts/CardRacket";
import CardFilter from "./parts/CardFilter";
import racketsData from "../../libs/mocks/rackets"

function RacketContainer() {
  const [filteredRackets, setFilteredRackets] = useState(racketsData);

  const handleFilterChange = (filters) => {
    const { minPrice, maxPrice, name } = filters;

    let filtered = racketsData.filter(racket => {
      const isPriceInRange =
        (minPrice === '' || parseFloat(racket.price) >= minPrice)
        &&
        (maxPrice === '' || parseFloat(racket.price) <= maxPrice)

      const isNameMatch = !name || racket.name.toLowerCase().includes(name.toLowerCase());

      return isPriceInRange && isNameMatch;
    });

    setFilteredRackets(filtered);
  };


  return (
    <div className="flex flex-row gap-5 py-10 px-20">
      <div className="w-[20%]">
        <CardFilter onFilter={handleFilterChange} />
      </div>
      <div className="w-[80%]">
        <CardRacket rackets={filteredRackets} />
      </div>
    </div>
  )
}



export default RacketContainer;
