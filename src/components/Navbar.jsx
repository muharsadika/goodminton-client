import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../redux/slice/profileSlice";
import { logout } from "../redux/slice/authSlice";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch])
  console.log(profile);

  const handleLogout = () => {
    dispatch(logout());
    setDropdownOpen(false);
    navigate('/login');
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row h-[20px] bg-[#c2c2c2] px-5" style={{ alignItems: "center" }}>
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
      <div className="navbar flex bg-[#111] text-white">
        <div className="w-[25%]">
          <Link to="/" className="btn btn-ghost text-xl">GOODMINTON</Link>
        </div>
        <div className="w-[50%] justify-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/rackets">RACKET</Link>
            </li>
            <li>
              <Link to="/strings">STRING</Link>
            </li>
            <li>
              <Link to="/">SHIRT</Link>
            </li>
          </ul>
        </div>
        <div className="w-[25%] justify-end pr-12 gap-3" onClick={() => setDropdownOpen(!isDropdownOpen)}>
          {/* === CART === */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              {/* === CART LOGO === */}
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
              {/* === END CART LOGO === */}
            </div>
            {/* === CART DROPDOWN === */}
            {isDropdownOpen && (
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body text-black">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            )}
            {/* === END CART DROPDOWN === */}
          </div>
          {/* === END CART === */}
          {/* === PROFILE === */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" onClick={() => setDropdownOpen(!isDropdownOpen)} >
              <div className="w-20 rounded-full">
                <img src={profile?.profile_picture || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="profile" />
              </div>
            </div>
            {isDropdownOpen && (
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black gap-2" >
                <li>
                  <Link className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            )}
          </div>
          {/* === END PROFILE === */}
        </div>
      </div>
    </div>
  )
}

export default Navbar