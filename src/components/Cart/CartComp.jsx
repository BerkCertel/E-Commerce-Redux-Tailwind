import { PropTypes } from "prop-types";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

function CartComp({ cart }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-main-div flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-cover my-8"
        src={cart?.image}
        alt=""
      />
      <div className="w-[200px]">
        <div>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className="font-bold text-lg">
        {cart?.price} $ {cart?.quantity}
      </div>
      <div
        className="bg-red-500 text-white h-10 cursor-pointer rounded text-lg w-[200px] flex justify-center items-center"
        onClick={() => dispatch(removeFromCart(cart?.id))}
      >
        Ürünü Sil
      </div>
    </div>
  );
}

CartComp.propTypes = {
  cart: PropTypes.object,
};

export default CartComp;
