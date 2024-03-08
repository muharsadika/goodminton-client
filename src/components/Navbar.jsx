import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../redux/slice/profileSlice";
import { logout } from "../redux/slice/authSlice";
import { BsCart4 } from "react-icons/bs";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch])

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

      <div className="navbar bg-[#222] text-white px-10">
        <div className="w-[25%]">
          <Link to="/" className="text-2xl">GOODMINTON</Link>
        </div>

        <div className="w-[50%] justify-center">
          <div className="menu menu-horizontal gap-10 text-lg font-extralight">
            <Link to="/rackets" className="hover:text-gray-500">RACKETS</Link>
            <Link to="/#" className="hover:text-gray-500">SHOES</Link>
            <Link to="/#" className="hover:text-gray-500">SHIRTS</Link>
            <Link to="/#" className="hover:text-gray-500">STRINGS</Link>
            <Link to="/#" className="hover:text-gray-500">BAGS</Link>
          </div>
        </div>

        <div className="w-[25%] flex justify-end gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <div className="indicator">
                <BsCart4 className="text-3xl hover:text-gray-500" />
                {/* <span className="badge badge-sm indicator-item">8</span> */}
              </div>
            </div>
            {isDropdownOpen && (
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content text-base w-52 bg-[#222] shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block" onClick={() => navigate('/cart')}>View cart</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar-group" onClick={() => setDropdownOpen(!isDropdownOpen)}>
              <div className="w-20 rounded-full">
                <img src={profile?.profile_picture} />
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