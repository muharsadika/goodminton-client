import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../redux/slice/profileSlice";
import { logout } from "../redux/slice/authSlice";
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch])

  useEffect(() => {
    const fetchCategoryList = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/auth/get-categories");
        setCategoryList(response.data.data);
      } catch (error) {
        console.log("Error fetching category list:", error);
      }
    }

    fetchCategoryList();
  }, [])


  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
    navigate('/login');
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row h-5 bg-[#ececec] px-5 items-center">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center">
          <p className="text-xs">GOODMINTON - WE SERVE THE BEST!</p>
        </div>
        <div className="flex-1 flex flex-row gap-5 justify-end">
          <p className="text-xs">FAQs</p>
          <p className="text-xs">Contact Us</p>
          <p className="text-xs">INDONESIA</p>
        </div>
      </div>

      <div className="flex justify-center items-center h-20 bg-[#222] text-white px-10">
        <div className="w-[25%] px-15">
          <Link to="/">
            <img src={import.meta.env.VITE_GOODMINTON_LOGO} alt="Goodminton" className="w-24" />
          </Link>
        </div>

        <div className="w-[50%] flex flex-col justify-center items-center">
          <div className="menu menu-horizontal gap-10 mb-[-5px] text-lg font-medium">
            <Link to={`/all-item`} className="hover:text-gray-500">ALL PRODUCTS</Link>
          </div>

          <div className="menu menu-horizontal gap-10 text-lg font-extralight">
            {categoryList.map((category) => (
              <Link to={`/category/${category.category_name}`} key={category.id} className="uppercase hover:text-gray-500">
                {category.category_name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-[25%] flex justify-end gap-5 px-10">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <div className="indicator">
                <BsCart4 className="text-3xl hover:text-gray-500" />
                <span className="badge badge-sm indicator-item">{profile.carts.cart_total_quantity}</span>
              </div>
            </div>
            {isDropdownOpen && (
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content text-base w-52 bg-[#222] shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">{profile.carts.cart_total_quantity} {profile.carts.cart_total_quantity > 1 ? 'Items' : 'Item'}</span>
                  <span className="text-info">Rp {(profile.carts.cart_total_price).toLocaleString('id-ID', { minimumFractionDigits: 0 })}</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block" onClick={() => navigate('/cart')}>View cart</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar-group" onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <div className="w-24 rounded-full">
                {profile.profile_picture ? <img src={profile.profile_picture} alt="user" /> : <CgProfile className="text-3xl hover:text-gray-500" />}
              </div>
            </div>
            {isDropdownOpen && (
              <ul tabIndex={0} className="menu menu-sm dropdown-content text-base mt-3 z-[1] p-2 shadow bg-[#222] rounded-box w-52">
                <li>
                  <a className="justify-between" onClick={() => navigate('/profile')}>
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a onClick={handleLogout}>Logout</a></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar