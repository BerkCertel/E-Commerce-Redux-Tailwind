import PropTypes from "prop-types";

function Sorting({ setSort }) {
  return (
    <div className="bg-gray-100 mt-5 p-5 flex  items-center justify-end">
      <select
        name=""
        id=""
        className="bg-white p-2"
        defaultValue="select"
        onClick={(e) => setSort(e.target.value)}
      >
        <option value="select" disabled>
          Select
        </option>
        <option value="inc">Price (High to Low)</option>
        <option value="dec">Price (Low to High)</option>
      </select>
    </div>
  );
}

Sorting.propTypes = {
  setSort: PropTypes.func,
};

export default Sorting;
