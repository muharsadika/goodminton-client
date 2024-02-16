import CardRacket from "./parts/CardRacket";
import CardFilter from "./parts/CardFilter";
import { useRacket } from "./hook/useRacket";
import { RacketProvider } from "./RacketContext";
// import racketsData from "../../libs/mocks/rackets"
// import { useFilter } from "../../hooks/useFilterRacket";
// import { useRacket } from "./hook/useRacket";

function RacketContainer() {
  // const { data: rackets } = useRacket();
  // const { filteredData: filteredRackets, handleFilterChange } = useFilter(rackets);

  useRacket();

  return (
    <RacketProvider>
      <div className="flex flex-row gap-5">
        <div className="w-[20%]">
          {/* <CardFilter onFilter={handleFilterChange} /> */}
          <CardFilter />
        </div>
        <div className="w-[80%]">
          {/* <CardRacket rackets={filteredRackets} /> */}
          <CardRacket />
        </div>
      </div>
    </RacketProvider>
  )
}

export default RacketContainer;

// import { useState } from 'react';
// import CardRacket from "./parts/CardRacket";
// import CardFilter from "./parts/CardFilter";
// import racketsData from "../../libs/mocks/rackets"

// function RacketContainer() {
//   const [filteredRackets, setFilteredRackets] = useState(racketsData);

//   const handleFilterChange = (filters) => {
//     const { minPrice, maxPrice, name } = filters;

//     let filtered = racketsData.filter(racket => {
//       const isPriceInRange =
//         (minPrice === '' || parseFloat(racket.price) >= minPrice)
//         &&
//         (maxPrice === '' || parseFloat(racket.price) <= maxPrice)

//       const isNameMatch = !name || racket.name.toLowerCase().includes(name.toLowerCase());

//       return isPriceInRange && isNameMatch;
//     });

//     setFilteredRackets(filtered);
//   };


//   return (
//     <div className="flex flex-row gap-5">
//       <div className="w-[20%]">
//         <CardFilter onFilter={handleFilterChange} />
//       </div>
//       <div className="w-[80%]">
//         <CardRacket rackets={filteredRackets} />
//       </div>
//     </div>
//   )
// }



// export default RacketContainer;
