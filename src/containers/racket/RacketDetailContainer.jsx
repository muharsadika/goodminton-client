import { useParams } from 'react-router-dom';
import { getRacketById } from '../../libs/mocks/racket';

function RacketDetailContainer() {
  const { id } = useParams();
  const racket = getRacketById(id);

  if (!racket) {
    return <div>Raket tidak ditemukan</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="text-5xl font-bold">
        <p>RACKET DETAIL</p>
      </div>
      <div className="flex flex-col border rounded-xl overflow-hidden">
        <div className="flex justify-center">
          <img src={racket.imageSrc} alt={racket.name} className="w-72" />
        </div>
        <div className="flex flex-col m-auto text-center gap-1 text-md my-3">
          <p className="font-bold">{racket.name}</p>
          <p className="text-xs">{racket.color}</p>
          <p className="">{racket.price}</p>
        </div>
      </div>
    </div>
  );
}

export default RacketDetailContainer;
