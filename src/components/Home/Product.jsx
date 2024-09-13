import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-main-div cursor-pointer w-[335px] relative p-3  mx-3 border rounded-md"
      onClick={() => navigate(`products/${product?.id}`)}
    >
      <div className="text-xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1">
        {product?.price}
        <span className="text-sm"></span>$
      </div>
      <img
        className="w-[200px] h-[200px] m-auto object-cover"
        src={product?.image}
        alt=""
      />
      <div className="text-center px-3 mt-3 font-bold border-t-2 border-gray-950">
        {product?.title}
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
