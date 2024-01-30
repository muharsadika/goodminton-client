import { useState } from 'react';
import racketsData from '../../../libs/mocks/racket';
import { Link } from 'react-router-dom';

function RacketPage() {
  const [visibleRackets, setVisibleRackets] = useState(8);

  const remainingRackets = racketsData.length - visibleRackets;

  const handleLoadMore = () => {
    setVisibleRackets(prevVisibleRackets => prevVisibleRackets + 8);
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="text-5xl font-semibold">
        <p>RACKET</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5">
        {racketsData.slice(0, visibleRackets).map((racket, index) => (
          <Link to={`/rackets/${racket.id}`} key={index}>
            <div key={index} className="flex flex-col border rounded-xl overflow-hidden">
              <div className="flex justify-center">
                <img src={racket.imageSrc} alt={racket.name} className="w-72" />
              </div>
              <div className="flex flex-col m-auto text-center gap-1 text-md py-3">
                <p className="font-bold">{racket.name}</p>
                <p className="text-xs">{racket.color}</p>
                <p className="">{racket.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {remainingRackets > 0 && (
        <div className="flex justify-center mt-5">
          <button onClick={handleLoadMore} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Load More ({remainingRackets})</button>
        </div>
      )}
    </div>
  );
}

export default RacketPage;


// import { useState } from 'react';
// import racketsData from '../../../libs/mocks/racket';

// function CardRacket() {
//   const [visibleRackets, setVisibleRackets] = useState(8); // Menyimpan jumlah raket yang ditampilkan

//   const handleLoadMore = () => {
//     setVisibleRackets(prevVisibleRackets => prevVisibleRackets + 8); // Menambahkan 8 raket ketika tombol "load more" ditekan
//   };

//   return (
//     <div className="flex flex-col gap-5">
//       <div className="text-5xl font-bold">
//         <p>RACKET LIST</p>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5">
//         {racketsData.slice(0, visibleRackets).map((racket, index) => (
//           <div key={index} className="flex flex-col border rounded-xl overflow-hidden">
//             <div className="flex justify-center">
//               <img src={racket.imageSrc} alt={racket.name} className="w-72" />
//             </div>
//             <div className="flex flex-col m-auto text-center gap-1 text-md py-3">
//               <p className="font-bold">{racket.name}</p>
//               <p className="text-xs">{racket.color}</p>
//               <p className="">{racket.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       {visibleRackets < racketsData.length && (
//         <div className="flex justify-center mt-5">
//           <button onClick={handleLoadMore} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Load More</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CardRacket;



// import React, { useState } from 'react';

// function CardRacket() {
//   const [selectedRacket, setSelectedRacket] = useState(null);

//   const racketsData = [
//     {
//       name: "ARCSABER 7 PRO",
//       color: "GRAYISH PEARL",
//       price: "IDR 2.500.000",
//       imageSrc: "/src/assets/images/card-racket/yonex/jpg/arcsaber-7-pro.jpg"
//     },
//     {
//       name: "ARCSABER 11 PRO",
//       color: "GRAYISH PEARL",
//       price: "IDR 2.500.000",
//       imageSrc: "/src/assets/images/card-racket/yonex/jpg/arcsaber-11-pro.jpg"
//     },
//     {
//       name: "ASTROX 88D PRO",
//       color: "GRAYISH PEARL",
//       price: "IDR 2.500.000",
//       imageSrc: "/src/assets/images/card-racket/yonex/jpg/astrox-88d-pro.jpg"
//     },
//     {
//       name: "ASTROX 88S PRO",
//       color: "GRAYISH PEARL",
//       price: "IDR 2.500.000",
//       imageSrc: "/src/assets/images/card-racket/yonex/jpg/astrox-88s-pro.jpg"
//     },
//     {
//       name: "ASTROX 99 PRO",
//       color: "GRAYISH PEARL",
//       price: "IDR 2.500.000",
//       imageSrc: "/src/assets/images/card-racket/yonex/jpg/astrox-99-pro.jpg"
//     },
//     {
//       name: "ASTROX 100 PRO",
//       color: "GRAYISH PEARL",
//       price: "IDR 2.500.000",
//       imageSrc: "/src/assets/images/card-racket/yonex/jpg/astrox-100-pro.jpg"
//     },
//     {
//       name: "NANOFLARE 800 PRO",
//       color: "GRAYISH PEARL",
//       price: "IDR 2.500.000",
//       imageSrc: "/src/assets/images/card-racket/yonex/jpg/nanoflare-800-pro.jpg"
//     },
//     {
//       name: "NANOFLARE 1000 Z",
//       color: "GRAYISH PEARL",
//       price: "IDR 2.500.000",
//       imageSrc: "/src/assets/images/card-racket/yonex/jpg/nanoflare-1000-z.jpg"
//     },
//   ];

//   const showRacketDetail = (racket) => {
//     setSelectedRacket(racket);
//   };

//   const hideRacketDetail = () => {
//     setSelectedRacket(null);
//   };

//   const handleModalClick = (e) => {
//     // Cek apakah target yang diklik adalah luar area modal
//     if (e.target.classList.contains('modal-bg')) {
//       hideRacketDetail(); // Tutup modal jika ya
//     }
//   };

//   return (
//     <div className="flex flex-col gap-5">
//       <div className="text-5xl font-bold">
//         <p>YONEX RACKETS</p>
//       </div>
//       <div className="grid grid-cols-4 gap-x-10 gap-y-5">
//         {racketsData.map((racket, index) => (
//           <div key={index} className="flex flex-col border rounded-xl overflow-hidden bg-slate-50">
//             <div className="" onClick={() => showRacketDetail(racket)}> {/* Menambahkan event onClick */}
//               <img src={racket.imageSrc} alt={racket.name} className="w-72" />
//             </div>
//             <div className="flex flex-col m-auto text-center gap-1 text-md py-3">
//               <p className="font-bold">{racket.name}</p>
//               <p className="text-xs">{racket.color}</p>
//               <p className="">{racket.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedRacket && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center modal-bg" onClick={handleModalClick}> {/* Menambahkan event onClick */}
//           <div className="bg-white p-5 rounded-xl">
//             <button className="absolute top-0 right-0 px-3 py-1 text-white bg-red-500 rounded-full" onClick={hideRacketDetail}>Close</button>
//             <div className="text-center">
//               <img src={selectedRacket.imageSrc} alt={selectedRacket.name} className="w-72 mx-auto" />
//               <p className="font-bold">{selectedRacket.name}</p>
//               <p>{selectedRacket.color}</p>
//               <p>{selectedRacket.price}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CardRacket;



