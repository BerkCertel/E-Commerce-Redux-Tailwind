import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../../../../redux/cartSlice";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

function NavbarRight() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { carts } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="navbar-right-main flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Search..."
        />
        <IoIosSearch size={28} />
      </div>
      <CiHeart size={28} />
      <div onClick={() => navigate("cart")} className="relative cursor-pointer">
        <div className="absolute text-xs -top-3 -right-3 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center ">
          {carts.length}
        </div>
        <SlBasket size={28} />
      </div>
    </div>
  );
}

export default NavbarRight;
