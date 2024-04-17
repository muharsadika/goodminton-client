import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useItems } from '../hook/useItems';
import { useItemsContext } from '../ItemsContext';
import { useCart } from '../../../cart/hook/useCart';
import ClipLoader from "react-spinners/ClipLoader";

function CardItems() {
  const { data: items, isLoading, isError } = useItems();
  const { addToCart } = useCart()
  const [visibleItems, setVisibleItems] = useState(8);
  const { filterName, minPrice, maxPrice } = useItemsContext();
  const [quantities, setQuantities] = useState({});

  if (isLoading) {
    return <div><ClipLoader /></div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const filteredItems = items.filter(item =>
    item.product_name.toLowerCase().includes(filterName.toLowerCase()) &&
    (minPrice === 0 || item.product_price >= Number(minPrice)) &&
    (maxPrice === 0 || item.product_price <= Number(maxPrice))
  );

  const remainingItems = filteredItems.length - visibleItems;

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleProducts => prevVisibleProducts + 8);
  };

  return (
    <div className="flex flex-col">
      <div className="text-5xl font-semibold mb-40">
        <p>ALL PRODUCTS</p>
      </div>

      <div className="grid grid-cols-4 gap-x-20 gap-y-20">
        {filteredItems.slice(0, visibleItems).map((item, index) => {
          const description = item.product_description;
          let color = description.split(',').find(item => item.trim().startsWith('Color'));
          color = color ? color.replace('Color:', '') : '';
          return (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex justify-center">
                <Link to={`/category/item/${item.id}`} key={index}>
                  <img src={item.product_image_1} alt={item.product_name} className="w-60 hover:scale-105" />
                </Link>
              </div>

              <div className="uppercase flex flex-col m-auto text-justify gap-1 text-md py-3">
                <p className="text-md font-bold">{item.product_name} <span className="text-sm font-thin text-gray-500">({item.product_quantity})</span></p>
                <p className="text-xs italic">{color}</p>
                <p className="text-sm mt-2" style={{ fontFamily: 'fantasy' }}>Rp {item.product_price.toLocaleString('id-ID', { minimumFractionDigits: 0 })}</p>
              </div>

              <div className='flex flex-row w-full'>
                <div className="w-1/2">
                  <input type="number" value={quantities[item.id] || 1} onChange={(e) => setQuantities({ ...quantities, [item.id]: Number(e.target.value) })} className="border border-gray-200 rounded-xl text-center text-md text-gray-400 px-5 w-full focus:outline-none focus:border-gray-400 hover:shadow-inner" />
                </div>
                <div className="w-1/2 absolute ml-28">
                  <button onClick={() => addToCart(item.id, quantities[item.id] || 1)} className="border rounded-xl text-center text-white text-xs py-1 px-5 bg-[#222] hover:bg-gray-700 hover:mt-0.5">Add to Cart</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className=''>
        {remainingItems > 0 && (
          <div className="flex justify-center mt-20">
            <button onClick={handleLoadMore} className="px-4 py-2 bg-[#222] text-white rounded-full hover:bg-gray-800">Load More ({remainingItems})</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardItems;




















// // Komponen CardItems
// import { useState } from 'react';
// import { useRackets } from '../hook/useRackets';
// import { useRacketContext } from '../RacketContext';
// import CardRacketItem from './CardRacketItem';

// function CardItems() {
//   const { data: items, isLoading, isError } = useRackets();
//   const [visibleItems, setVisibleItems] = useState(6);
//   const { filterName, minPrice, maxPrice } = useRacketContext();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error</div>;
//   }

//   const filteredItems = items.filter(item =>
//     item.product_name.toLowerCase().includes(filterName.toLowerCase()) &&
//     (minPrice === 0 || item.product_price >= Number(minPrice)) &&
//     (maxPrice === 0 || item.product_price <= Number(maxPrice))
//   );

//   const remainingItems = filteredItems.length - visibleItems;

//   const handleLoadMore = () => {
//     setVisibleItems(prevVisibleProducts => prevVisibleProducts + 6);
//   };

//   return (
//     <div className="flex flex-col gap-10">
//       <div className="text-5xl font-semibold">
//         <p>RACKET</p>
//       </div>
//       <div className="grid grid-cols-3 gap-x-10 gap-y-10">
//         {filteredItems.slice(0, visibleItems).map((item, index) => (
//           <CardRacketItem key={index} item={item} />
//         ))}
//       </div>
//       {remainingItems > 0 && (
//         <div className="flex justify-center mt-5">
//           <button onClick={handleLoadMore} className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">Load More ({remainingItems})</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default CardItems;
