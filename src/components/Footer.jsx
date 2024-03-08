import { FaInstagramSquare, FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footer-center p-10 rounded text-white bg-[#222]">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://www.instagram.com/">
            <FaInstagramSquare className="w-7 h-7" />
          </Link>
          <Link to="https://twitter.com/">
            <FaTwitter className="w-7 h-7" />
          </Link>
          <Link to="https://www.youtube.com/">
            <FaYoutube className="w-7 h-7" />
          </Link>
          <Link to="https://www.facebook.com/">
            <FaFacebookSquare className="w-7 h-7" />
          </Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by GOODMINTON Industries Ltd</p>
      </aside>
    </footer>
  )
}

export default Footer