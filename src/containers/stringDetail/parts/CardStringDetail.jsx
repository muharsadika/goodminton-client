import { useParams } from 'react-router-dom';
import stringsData from '../../../libs/mocks/strings';

function CardStringDetail() {
  const { id } = useParams();
  const string = stringsData.find((string) => string.id === parseInt(id));

  if (!string) {
    return <div>Raket tidak ditemukan</div>;
  }

  return (
    <div className="flex flex-row justify-center px-32 gap-10">

      <div className="w-[50%] flex justify-center items-center">
        <img src={string.imageSrc} alt={string.name} className="w-[100%]" />
      </div>

      <div className="flex flex-col gap-10 py-3 w-[50%]">
        <div className='flex flex-col gap-2 text-2xl'>
          <p className="font-bold">
            {string.name}
          </p>
        </div>
        <div className='flex flex-col gap-2 text-md'>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Color</span>
            <span>:</span>
            <span>{string.color}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Price</span>
            <span>:</span>
            <span>{string.price}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Flex</span>
            <span>:</span>
            <span>{string.Flex}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Frame</span>
            <span>:</span>
            <span>{string.Frame}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Shaft Composition</span>
            <span>:</span>
            <span>{string.ShaftComposition}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Joint</span>
            <span>:</span>
            <span>{string.Joint}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Length</span>
            <span>:</span>
            <span>{string.Length}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Weight Grip</span>
            <span>:</span>
            <span>{string.WeightGrip}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Stringing Advice</span>
            <span>:</span>
            <span>{string.StringingAdvice}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Color</span>
            <span>:</span>
            <span>{string.Color}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Made In</span>
            <span>:</span>
            <span>{string.MadeIn}</span>
          </p>
          <p className='flex gap-5'>
            <span className="w-[200px] inline-block">Item Code</span>
            <span>:</span>
            <span>{string.ItemCode}</span>
          </p>
        </div>
      </div>

    </div>
  );
}

export default CardStringDetail;
