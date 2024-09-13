import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function DetailComp({ productDetail }) {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity < productDetail?.rating.count) {
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= productDetail?.rating.count) {
      setQuantity(value);
    }
  };

  const addToBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        quantity,
        price: productDetail?.price,
      })
    );
  };

  return (
    <div className="productDetail-main-div w-full h-full flex gap-10 my-10">
      <img
        className="w-[400px] h-[400px] object-cover"
        src={productDetail?.image}
        alt={productDetail?.title}
      />
      <div>
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2">{productDetail?.description}</div>
        <div className="text-l text-yellow-600">
          Rating: {productDetail?.rating.rate}
        </div>
        <div className="text-sm text-purple-700">
          Count: {productDetail?.rating.count}
        </div>
        <div className="text-2xl font-bold text-red-600">
          Price: {productDetail?.price}
          <span className="text-sm"> $</span>
        </div>
        <div className="flex items-center justify-center gap-5 my-5">
          <div className="text-5xl cursor-pointer" onClick={decrement}>
            -
          </div>
          <input
            className="w-20 text-center font-bold outline-none  border-black border-b-2"
            type="number"
            readOnly
            value={quantity}
            onChange={handleQuantityChange}
          />
          <div className="text-4xl cursor-pointer" onClick={increment}>
            +
          </div>
        </div>
        <div
          className="border rounded-md text-lg bg-gray-200 cursor-pointer font-bold h-16 flex items-center justify-center"
          onClick={addToBasket}
        >
          Add To Cart
        </div>
      </div>
    </div>
  );
}

DetailComp.propTypes = {
  productDetail: PropTypes.object, // object olarak düzeltildi
};

export default DetailComp;
