import { useParams } from 'react-router-dom';
import racketsData from '../../../libs/mocks/rackets';

function CardRacektDetail() {
  const { id } = useParams();
  const racket = racketsData.find((racket) => racket.id === parseInt(id));

  if (!racket) {
    return <div>Raket tidak ditemukan</div>;
  }

  return (
    // <div className="flex flex-row justify-center px-32 gap-10">
    <div className="px-32 gap-10 grid grid-rows-2 grid-flow-col">

      <div className="row-span-2">
        <img src={racket.imageSrc} alt={racket.name} className="w-[100%]" />
      </div>

      <div className="col-span-1">
        <div className='flex flex-col gap-2 text-2xl'>
          <p className="font-bold">
            {racket.name}
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
      </div>

      <div className="col-span-1">
        <div className='flex flex-col gap-2 text-2xl'>
          <p className="font-bold">
            {racket.name}
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
      </div>

    </div>
  );
}

export default CardRacektDetail;
