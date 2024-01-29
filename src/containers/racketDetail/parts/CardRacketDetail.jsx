/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import racketsData from '../../../libs/mocks/racket';

function RacketDetailContainer() {
  const { id } = useParams();
  const racket = racketsData.find((racket) => racket.id === parseInt(id));

  if (!racket) {
    return <div>Raket tidak ditemukan</div>;
  }

  return (
    <div className="flex flex-row p-20 justify-center gap-5">
      <div className="w-[50%]" style={{ border: "1px solid red" }}>
        <img src={racket.imageSrc} alt={racket.name} className="w-auto" />
      </div>
      <div className="flex flex-col text-center gap-20 text-md py-3 w-[50%]" style={{ border: "1px solid red" }}>
        <div>
          <p className="font-bold">{racket.name}</p>
        </div>
        <div className='flex flex-col gap-1'>
          <p className="">{racket.name}</p>
          <p className="text-xs">{racket.color}</p>
          <p className="">{racket.price}</p>
        </div>
      </div>
    </div>
  );
}

export default RacketDetailContainer;
