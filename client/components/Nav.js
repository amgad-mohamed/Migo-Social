import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div>
      <ul className="nav container justify-content-between  my-3 gap-3 ">
        <li className="nav-item ">
          <Link href="/" className="text-decoration-none">
            <img src="/images/logo.png" alt="logo" className="logo" />
          </Link>
        </li>
        <div className="d-flex align-items-center gap-4">
          <Link href="login" className="text-decoration-none nav-item-btn">
            <li >Login</li>
          </Link>
          <Link href="register" className="text-decoration-none nav-item-btn">
            <li >Register</li>
          </Link> 
        </div>
      </ul>
    </div>
  );
};

export default Nav;
