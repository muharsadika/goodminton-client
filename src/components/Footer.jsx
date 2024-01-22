import { FaInstagramSquare, FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer p-10 bg-slate-100 text-base-content">
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Social</header>
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
    </footer>
  )
}

export default Footer