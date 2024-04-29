import { useParams } from 'react-router-dom';
import { useProduct } from './hooks/useAllProduct';
import ClipLoader from "react-spinners/ClipLoader";
import Breadcrump from '../../components/Breadcrump'
import { useCart } from '../cart/hook/useCart';
import { useState } from 'react';

function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProduct(id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (isLoading) {
    return <><ClipLoader /></>;
  }

  if (isError) {
    return <>Error</>;
  }

  const description = product.product_description.split(',').reduce((acc, item) => {
    const [key, value] = item.split(':');
    acc[key.trim()] = value ? value.trim() : '';
    return acc;
  }, {});

  return (
    <div className='flex flex-col gap-10 py-10 px-20'>
      <div className="">
        <Breadcrump brand={product.brand.brand_name} category={product.category.category_name} name={product.product_name} />
      </div>

      <div className="flex flex-col">
        <div className="px-32 gap-10 grid grid-rows-1 grid-flow-col">
          <div className="row-span-2">
            <img src={product.product_image_1} alt={product.product_name} className="w-[100%]" />
          </div>

          <div className="col-span-1">
            <div className='flex flex-col text-2xl mb-5'>
              <p className="font-bold">
                {product.product_name}
              </p>
            </div>

            <div className='flex flex-col gap-2 text-md'>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Color</span>
                <span>:</span>
                <span>{description.Color}</span>
              </p>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Price</span>
                <span>:</span>
                <span>Rp {product.product_price.toLocaleString('id-ID', { minimumFractionDigits: 0 })}</span>
              </p>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Flex</span>
                <span>:</span>
                <span>{description.Flex}</span>
              </p>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Frame</span>
                <span>:</span>
                <span>{description.Frame}</span>
              </p>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Shaft Composition</span>
                <span>:</span>
                <span>{description.ShaftComposition}</span>
              </p>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Joint</span>
                <span>:</span>
                <span>{description.Joint}</span>
              </p>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Length</span>
                <span>:</span>
                <span>{description.Length}</span>
              </p>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Weight Grip</span>
                <span>:</span>
                <span>{description.WeightGrip}</span>
              </p>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Stringing Advice</span>
                <span>:</span>
                <span>{description.StringingAdvice}</span>
              </p>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Color</span>
                <span>:</span>
                <span>{description.Color}</span>
              </p>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Made In</span>
                <span>:</span>
                <span>{description.MadeIn}</span>
              </p>
              <p className='flex gap-5'>
                <span className="w-[200px] inline-block">Item Code</span>
                <span>:</span>
                <span>{description.ItemCode}</span>
              </p>
            </div>

          </div>
          <div className="flex flex-row w-1/2 gap-1">
            <div className="w-full">
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full p-2 border rounded-xl text-center text-base text-gray-400 border-gray-200 focus:outline-none focus:border-gray-400 hover:shadow-lg"
              />
            </div>

            <div className="w-full">
              <button
                onClick={() => addToCart(product.id, Number(quantity))}
                className="w-full py-2 border rounded-xl text-center text-base text-white bg-[#222] hover:shadow-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProductDetail;
