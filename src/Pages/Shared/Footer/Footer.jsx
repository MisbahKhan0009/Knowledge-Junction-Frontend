import React from "react";
import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center lg:text-lg p-10 bg-primary text-secondary">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover">About us</Link>
        <Link to={"/developers"} className="link link-hover">
          Developers
        </Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Seminars</Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaSquareXTwitter className="text-2xl md:text-3xl lg:text-4xl" />
          </a>
          <a>
            <FaSquareFacebook className="text-2xl md:text-3xl lg:text-4xl" />
          </a>
          <a>
            <FaSquareInstagram className="text-2xl md:text-3xl lg:text-4xl" />
          </a>
        </div>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Knowledge Junction Foundation.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
