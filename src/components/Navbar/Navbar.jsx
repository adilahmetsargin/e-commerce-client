import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              width={30}
              height={30}
              src="data:image/png;base64,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"
              alt=""
            />
            <IoIosArrowDown />
          </div>
          <div className="item">
            <span>USD</span>
            <IoIosArrowDown />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Store
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <AiOutlineSearch />
            <IoPersonOutline />
            <AiOutlineHeart />
            <div className="cartIcon">
              <AiOutlineShoppingCart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
