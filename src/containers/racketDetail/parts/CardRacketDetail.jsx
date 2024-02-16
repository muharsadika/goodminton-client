import { useParams } from 'react-router-dom';
import { useRacket } from '../hook/useRacket';

function CardRacektDetail() {
  const { id } = useParams();
  const { data: racket, isLoading, isError } = useRacket(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const description = racket.product_description.split(',').reduce((acc, item) => {
    const [key, value] = item.split(':');
    acc[key.trim()] = value ? value.trim() : '';
    return acc;
  }, {});

  return (
    <div className="px-32 gap-10 grid grid-rows-1 grid-flow-col">
      {/* <div className="px-32 gap-10 grid grid-rows-2 grid-flow-col"> */}

      <div className="row-span-1 my-auto">
        <img src={racket.product_image_1} alt={racket.product_name} className="w-[100%]" />
      </div>

      <div className="flex flex-col gap-5">
        {/* <div className="col-span-1"> */}
        <div className='flex flex-col text-2xl'>
          <p className="font-bold">
            {racket.product_name}
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
            <span>Rp {racket.product_price.toLocaleString('id-ID', { minimumFractionDigits: 0 })}</span>
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

      {/* <div className="col-span-1">
        <div className='flex flex-col gap-2 text-2xl'>
          <p className="font-bold">
            {racket.product_name}
          </p>
        </div>
        <div className='flex flex-col gap-2 text-md'>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Color</span>
            <span>:</span>
            <span>{racket.color}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Price</span>
            <span>:</span>
            <span>{racket.price}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Flex</span>
            <span>:</span>
            <span>{racket.Flex}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Frame</span>
            <span>:</span>
            <span>{racket.Frame}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Shaft Composition</span>
            <span>:</span>
            <span>{racket.ShaftComposition}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Joint</span>
            <span>:</span>
            <span>{racket.Joint}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Length</span>
            <span>:</span>
            <span>{racket.Length}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Weight Grip</span>
            <span>:</span>
            <span>{racket.WeightGrip}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Stringing Advice</span>
            <span>:</span>
            <span>{racket.StringingAdvice}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Color</span>
            <span>:</span>
            <span>{racket.Color}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Made In</span>
            <span>:</span>
            <span>{racket.MadeIn}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Item Code</span>
            <span>:</span>
            <span>{racket.ItemCode}</span>
          </p>
        </div>
      </div> */}

    </div>
  );
}

export default CardRacektDetail;
