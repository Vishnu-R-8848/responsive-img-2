import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-wrapper h-[56px] sm:flex font-semibold hidden items-center justify-between py-2 px-4">
      <ul className="nav-links-wrapper capitalize flex items-center gap-8">
        <li className="nav-items">
          <a href="#" className="nav-link">
            male
          </a>
        </li>
        <li className="nav-items">
          <a href="#" className="nav-link">
            female
          </a>
        </li>
        <li className="nav-items">
          <a href="#" className="nav-link">
            blog
          </a>
        </li>
        <li className="nav-items">
          <a href="#" className="nav-link">
            contact
          </a>
        </li>
      </ul>
      <div className="nav-logo logo">
        <h1 className="text-4xl uppercase font-bold">toff</h1>
      </div>
      <div className="user-controller-wrapper capitalize flex items-center gap-8">
        <p className="search">search</p>
        <p className="Account">account</p>
        <p className="cart">cart [0]</p>
      </div>
    </nav>
  );
};

export default Navbar;
