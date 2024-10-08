import { PropTypes } from "prop-types";

function PageContainer({ children }) {
  return <div>{children}</div>;
}

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
