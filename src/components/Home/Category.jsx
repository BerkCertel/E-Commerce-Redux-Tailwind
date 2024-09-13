import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import { useEffect } from "react";
import PropTypes from "prop-types";

function Category({ setCategory }) {
  const dispacth = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispacth(getCategories());
  }, [dispacth]);

  return (
    <div
      className="category-main-div w-1/6 bg-gray-100 p-4 max-h-screen
    "
    >
      <div className="border-b pb-2 text-xl font-bold ">CATEGORY</div>
      {categories?.map((category, index) => (
        <div
          onClick={() => setCategory(category)}
          className="text-l mt-2 pb-1 uppercase cursor-pointer hover:bg-gray-200"
          key={index}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

Category.propTypes = {
  setCategory: PropTypes.func,
};

export default Category;
