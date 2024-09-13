import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/Cart/CartComp";

function Cart() {
  const dispatch = useDispatch();

  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, carts]);

  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts?.map((cart, index) => (
            <CartComp key={index} cart={cart} />
          ))}
          <div className="flex items-center justify-end text-2xl ">
            Total Amout :
            <span className="font-bold text-2xl mx-1"> {totalAmount}</span>
          </div>
        </div>
      ) : (
        <div>Kartınız boş</div>
      )}
    </div>
  );
}

export default Cart;
