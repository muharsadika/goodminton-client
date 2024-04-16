import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRacket } from "../containers/racket/racketDetail/hook/useRacket";


function Breadcrump({ link, page }) {

  Breadcrump.propTypes = {
    link: PropTypes.string,
    page: PropTypes.string
  }

  const { id } = useParams();
  const { data: racket } = useRacket(id);


  return (
    <div className="text-sm">
      <nav className="text-gray-500">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/" className="hover:text-slate-700">Home</Link>
            <RxSlash className="w-4 h-4 mx-2" />
          </li>

          <li className="flex items-center">
            <Link to={link} className="hover:text-slate-700">{page}</Link>
            <RxSlash className="w-4 h-4 mx-2" />
          </li>

          <li className="flex items-center hover:text-slate-700 font-semibold">
            {racket && <Link to={`/rackets/${racket.id}`}>{racket.product_name}</Link>}
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrump;