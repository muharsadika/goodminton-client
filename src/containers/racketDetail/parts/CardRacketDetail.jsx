import { Link, useParams } from 'react-router-dom';
import racketsData from '../../../libs/mocks/racket';
import { RxSlash } from "react-icons/rx";

function CardRacektDetail() {
  const { id } = useParams();
  const racket = racketsData.find((racket) => racket.id === parseInt(id));

  if (!racket) {
    return <div>Raket tidak ditemukan</div>;
  }

  return (
    <div className="flex flex-col px-32 py-10 gap-5">
      <nav className="text-gray-500" style={{ border: "1px solid red" }}>
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/" className="hover:text-slate-700">Home</Link>
            <RxSlash className="w-4 h-4 mx-2" />
          </li>
          <li className="flex items-center">
            <Link to="/rackets" className="hover:text-slate-700">Rackets</Link>
            <RxSlash className="w-4 h-4 mx-2" />
          </li>
          <li className="flex items-center">
            {racket.name}
          </li>
        </ol>
      </nav>
      <div className="flex flex-row justify-center gap-5">
        <div className="w-[50%]" style={{ border: "1px solid red" }}>
          <img src={racket.imageSrc} alt={racket.name} className="w-auto" />
        </div>
        <div className="flex flex-col text-center gap-20 text-md py-3 w-[50%]" style={{ border: "1px solid red" }}>
          <div>
            <p className="font-bold">{racket.name}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className="text-xs">{racket.color}</p>
            <p className="">{racket.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardRacektDetail;
