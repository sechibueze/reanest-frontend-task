import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CategoryList.scss";
const CategoryList = () => {
  return (
    <div className="category-icons-card">
      <div className="category-intro">
        <span className="category-title"> Categoris</span>
        <span className="category-controls">
          <span className="lt">
            {" "}
            <FontAwesomeIcon icon={["fas", "angle-left"]} />{" "}
          </span>
          <span className="gt">
            <FontAwesomeIcon icon={["fas", "angle-right"]} />{" "}
          </span>
        </span>
      </div>
      <ul className="category-list">
        <li>
          <span className="category-icon">
            <FontAwesomeIcon
              icon={["far", "credit-card"]}
              size="2x"
              fixedWidth
            />{" "}
          </span>
          <span className="category-text"> Mobile &amp; internet data </span>
        </li>
        <li>
          <span className="category-icon">
            <FontAwesomeIcon
              icon={["fas", "broadcast-tower"]}
              size="2x"
              fixedWidth
            />{" "}
          </span>
          <span className="category-text"> Cable TV </span>
        </li>
        <li>
          <span className="category-icon">
            <FontAwesomeIcon icon={["far", "lightbulb"]} size="2x" fixedWidth />{" "}
          </span>
          <span className="category-text"> Power &amp; utility </span>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
