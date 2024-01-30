
import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import racketsData from "../../../libs/mocks/racket";

function CardBreadcrump() {
  const { id } = useParams();
  const racket = racketsData.find((racket) => racket.id === parseInt(id));

  return (
    <div>
      <div className="px-32 py-10">
        <nav className="text-gray-500">
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
      </div>
    </div>
  )
}

export default CardBreadcrump