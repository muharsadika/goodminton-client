import { useParams } from 'react-router-dom';
import racketsData from '../../../libs/mocks/racket';

function CardRacektDetail() {
  const { id } = useParams();
  const racket = racketsData.find((racket) => racket.id === parseInt(id));

  if (!racket) {
    return <div>Raket tidak ditemukan</div>;
  }

  return (
    <div className="flex flex-row justify-center px-32 gap-10">
      <div className="w-[50%]">
        <img src={racket.imageSrc} alt={racket.name} className="w-auto" />
      </div>
      <div className="flex flex-col gap-10 py-3 w-[50%]">
        <div className='flex flex-col gap-2 text-2xl'>
          <p className="font-bold">{racket.name}</p>
        </div>
        <div className='flex flex-col gap-2 text-md'>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Color</span><div className=''>:</div>{racket.color}</p>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Price</span><div className=''>:</div>{racket.price}</p>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Flex</span><div className=''>:</div>{racket.Flex}</p>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Frame</span><div className=''>:</div>{racket.Frame}</p>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Shaft Composition</span><div className=''>:</div>{racket.ShaftComposition}</p>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Joint</span><div className=''>:</div>{racket.Joint}</p>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Length</span><div className=''>:</div>{racket.Length}</p>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Weight Grip</span><div className=''>:</div>{racket.WeightGrip}</p>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Stringing Advice</span><div className=''>:</div>{racket.StringingAdvice}</p>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Color</span><div className=''>:</div>{racket.Color}</p>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Made In</span><div className=''>:</div>{racket.MadeIn}</p>
          <p className='flex gap-5'><span className="w-[200px] inline-block">Item Code</span><div className=''>:</div>{racket.ItemCode}</p>
        </div>
      </div>
    </div>
  );
}

export default CardRacektDetail;
