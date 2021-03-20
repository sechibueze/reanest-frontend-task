import productImage from "../../assets/images/icon.jpg";
import "./ProductLayout.scss";
const ProductLayout = () => {
  return (
    <div className="product-layout-wrapper">
      <div className="product-item">
        <div className="product-item-alpha">
          {/* <span
            style={{
              width: "50px",
              height: "100%",
              backgroundImage: productImage,
            }}
          /> */}
          <img
            src={productImage}
            alt="product visuals"
            className="product-image"
          />
          <p className="product-name"> Product name</p>
        </div>
        <div className="product-item-beta">
          <span className="product-category"> Categoris </span>
          <span className="product-date"> Categoris </span>
          <span className="product-status"> PROCESSED </span>
          <span className="product-action">
            {" "}
            <input type="checkbox" />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
