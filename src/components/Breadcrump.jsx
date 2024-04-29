import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Breadcrump({ brand, category, name }) {
  return (
    <div className="text-sm">
      <nav className="text-gray-500">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center capitalize">
            <Link to="/" className="hover:text-slate-700">Home</Link>
            <RxSlash className="w-4 h-4 mx-2" />
          </li>

          <li className="flex items-center capitalize">
            <Link to="/all-products" className="hover:text-slate-700">{brand}</Link>
            <RxSlash className="w-4 h-4 mx-2" />
          </li>

          <li className="flex items-center capitalize">
            <Link to={`/category/${category}`} className="hover:text-slate-700">{category} </Link>
            <RxSlash className="w-4 h-4 mx-2" />
          </li>

          <li className="flex items-center hover:text-slate-700 font-semibold">
            {name}
          </li>
        </ol>
      </nav>
    </div>
  )
}

Breadcrump.propTypes = {
  brand: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string,
}

export default Breadcrump;