import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategoryProducts } from "../../redux/productSlice.js";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Loading from "../Loading/Loading.jsx";
import Product from "./Product.jsx";

function Products({ category, sort }) {
  const dispatch = useDispatch();

  const { products, productsStatus } = useSelector((state) => state.products);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  //! Paginate özellikleri
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  // Önce tüm ürünleri sıralıyoruz:
  const sortedProducts = [...products].sort((a, b) =>
    sort === "inc"
      ? b.price - a.price // Yüksekten Düşüğe
      : sort === "dec"
      ? a.price - b.price // Düşükten Yükseğe
      : 0
  );

  const currentItems = sortedProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sortedProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % sortedProducts.length;
    setItemOffset(newOffset);
  };

  console.log(sort);

  return (
    <div>
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap gap-2">
            {currentItems?.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
}

Products.propTypes = {
  category: PropTypes.string,
  sort: PropTypes.string,
};

export default Products;
