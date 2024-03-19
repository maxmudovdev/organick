import React from "react";
import Logo from "../../assets/icons/logo";
import Search_icon from "../../assets/icons/search_icon";
import Cart from "../../assets/icons/cart";
import { header_links } from "../../data/header-data";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="h-[150px] flex items-center">
      <div className="container">
        <div className="nav flex items-center justify-between gap-[40px] ">
          <Logo />
          <ul
            id="nav"
            className="flex items-center justify-between w-[500px] font-roboto-bold text-[18px] gap-3"
          >
            {header_links.map((item) => (
              <NavLink className="px-2 py-1" key={item.path} to={item.path}>
                {item.name}
              </NavLink>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <form className="flex items-center justify-between bg-[#ebebeb] h-[58px] w-[300px] rounded-[36px] px-[6px] pl-4 gap-2 ">
              <input
                className=" placeholder-slate-900 outline-none border-none flex-grow bg-transparent"
                type="text"
                placeholder="Search..."
              />
              <button className="p-[13px] bg-[#7EB693] rounded-full">
                <Search_icon />
              </button>
            </form>
            <div className="cart flex items-center font-roboto-medium text-xl border border-[1px solid] border-[#E0E0E0] pl-[6px] pr-[23px] py-[5px] rounded-[33px] gap-3">
              <button className="cart">
                <Cart />
              </button>
              <p>Cart(0)</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
