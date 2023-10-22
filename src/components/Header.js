import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
const Header = () => {
  const onlineStatus = useOnlineStatus();

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="fixed flex justify-between   lg:px-8 h-16 top-0 right-2 left-0 items-center shadow-lg bg-white z-[1001]">
      <div className=" h-full py-3 lg:py-2 ">
        <Link to="/">
          <img className="h-full w-full px-4" src={logo}></img>
        </Link>
      </div>

      <div>
        <button className="flex items-center spacex-3 pr-2 md:pr-0 mr-5">
          <Link to="/cart">
            <div className="relative">
              <FaShoppingBag />
              <span className="absolute text-center -right-2 -top-1 text-xs font-bold bg-[#D4145A] text-white rounded-full w-4 h-4">
                {cartItems.length}
              </span>
            </div>
          </Link>
          <span className="hidden md:inline-block font-semibold text-black p-2">
            Cart
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
