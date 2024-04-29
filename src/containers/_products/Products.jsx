import { useAllProducts } from './hooks/useAllProduct';
import { useRackets } from './hooks/useRacket';
import { useStrings } from './hooks/useString';
import { useShoes } from './hooks/useShoes'
import { useShirts } from './hooks/useShirt'
import { useBags } from './hooks/useBag'
import { useCart } from '../cart/hook/useCart';
import ClipLoader from "react-spinners/ClipLoader";
import ProductList from './ProductList';
import PropTypes from 'prop-types';
import { useProductContext } from './hooks/ProductContext';
import { useState } from 'react';

function Product({ category }) {
  const { data: allProducts, isLoading: productsLoading, isError: productsError } = useAllProducts();
  const { data: rackets, isLoading: racketsLoading, isError: racketsError } = useRackets("racket");
  const { data: strings, isLoading: stringsLoading, isError: stringsError } = useStrings("string");
  const { data: shirts, isLoading: shirtsLoading, isError: shirtsError } = useShirts("shirt");
  const { data: bags, isLoading: bagsLoading, isError: bagsError } = useBags("bag");
  const { data: shoes, isLoading: shoesLoading, isError: shoesError } = useShoes("shoes");
  const isLoading = productsLoading || racketsLoading || stringsLoading || shoesLoading || shirtsLoading || bagsLoading;
  const isError = productsError || racketsError || stringsError || shoesError || shirtsError || bagsError;
  const { addToCart } = useCart();
  const { filterName, minPrice, maxPrice } = useProductContext();
  const [visibleProducts, setVisibleProducts] = useState(8);

  const categoryList = {
    allProduct: allProducts,
    racket: rackets,
    string: strings,
    shoes: shoes,
    shirt: shirts,
    bag: bags
  };
  const products = categoryList[category] || [];

  const filteredProducts = products.filter(product => {
    const productNameMatch = product.product_name.toLowerCase().includes(filterName.toLowerCase());
    const productPriceMatch = product.product_price == parseFloat(filterName);
    const productMinPriceMatch = minPrice === 0 || product.product_price >= Number(minPrice);
    const productMaxPriceMatch = maxPrice === 0 || product.product_price <= Number(maxPrice);

    return (productNameMatch || productPriceMatch) && (productMinPriceMatch && productMaxPriceMatch);
  });

  const remainingProducts = filteredProducts.length - visibleProducts;
  const handleLoadMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8);
  };

  if (isLoading) {
    return <><ClipLoader /></>
  }
  if (isError) {
    return <>Error</>
  }
  if (products.length === 0) {
    return <>No products found</>
  }

  return (
    <div className="flex flex-col py-10">
      <div className="text-5xl font-semibold mb-20 uppercase">
        <p>
          {products[0].brand.brand_name}
          {" "}
          {category === "racket" ? "Rackets"
            : category === "string" ? "Strings"
              : category === "allProduct" ? "Products"
                : category === "shoes" ? "Shoes"
                  : category === "bag" ? "Bags"
                    : category === "shirt" ? "Shirts"
                      : "Other Category"}
        </p>
      </div>


      <div className="grid grid-cols-4 gap-y-20">
        {filteredProducts.slice(0, visibleProducts).map(product => (
          <ProductList key={product.id} category={category} product={product} addToCart={addToCart} />
        ))}
      </div>

      <div>
        {remainingProducts > 0 && (
          <div className="flex justify-center mt-20">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-[#222] text-white rounded-full hover:bg-gray-800"
            >
              Load More ({remainingProducts})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

Product.propTypes = {
  category: PropTypes.string.isRequired,
}

export default Product;









// import { useState } from 'react';
// import { useRackets } from './hooks/useRacket';
// import { useCart } from '../../../cart/hook/useCart';
// import ClipLoader from "react-spinners/ClipLoader";
// import CardRacketItem from './CardRacketItem';

// function Product() {
//   const { data: rackets, isLoading, isError } = useRackets();
//   const { addToCart } = useCart()
//   const [visibleRackets, setVisibleRackets] = useState(8);

//   const remainingRackets = rackets.length - visibleRackets;
//   const handleLoadMore = () => {
//     setVisibleRackets(prevVisibleRackets => prevVisibleRackets + 8);
//   };

//   if (isLoading) {
//     return <div><ClipLoader /></div>;
//   }
//   if (isError) {
//     return <div>Error</div>;
//   }

//   return (
//     <div className="flex flex-col">
//       <div className="text-5xl font-semibold mb-40">
//         <p>YONEX RACKET</p>
//       </div>

//       <div className="grid grid-cols-4 gap-x-20 gap-y-20">
//         {rackets.slice(0, visibleRackets).map((racket, index) => (
//           <CardRacketItem
//             key={index}
//             racket={racket}
//             addToCart={addToCart}
//           />
//         ))}
//       </div>

//       <div className=''>
//         {remainingRackets > 0 && (
//           <div className="flex justify-center mt-20">
//             <button
//               onClick={handleLoadMore}
//               className="px-4 py-2 bg-[#222] text-white rounded-full hover:bg-gray-800"
//             >
//               Load More ({remainingRackets})
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Product;