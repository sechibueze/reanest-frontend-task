import productImage from "../../assets/images/icon.jpg";
import { testData } from "../../_data";
import "./ProductLayout.scss";
const ProductLayout = ({ transactions }) => {
  return (
    <div className="product-layout-wrapper">
      {transactions.items.map((item, idx) => {
        const { image, title, category, date, status } = item;
        return (
          <div className="product-item" key={idx}>
            <img
              src={image || productImage}
              alt="product visuals"
              className="product-image"
            />
            <div className="product-data">
              {/* <div className="product-item-alpha"> */}
              <p className="product-name"> {title && title} </p>
              {/* </div> */}
              <div className="product-item-meta">
                <span className="product-category"> {category} </span>
                <span className="product-date"> {date} </span>
                <span className="product-status"> {status} </span>
                <span className="product-action">
                  {" "}
                  <input type="checkbox" />{" "}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
ProductLayout.defaultProps = {
  transactions: testData.transactions,
};
export default ProductLayout;
