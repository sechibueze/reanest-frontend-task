import productImage from "../../assets/images/icon.jpg";
import "./ProductLayout.scss";
const ProductLayout = () => {
  return (
    <div className="product-layout-wrapper">
      <div className="product-item">
        <img
          src={productImage}
          alt="product visuals"
          className="product-image"
        />
        <div className="product-data">
          {/* <div className="product-item-alpha"> */}
          <p className="product-name"> Chokolate cakes</p>
          {/* </div> */}
          <div className="product-item-meta">
            <span className="product-category"> Cakes </span>
            <span className="product-date"> 19.08.2018 </span>
            <span className="product-status"> PROCESSED </span>
            <span className="product-action">
              {" "}
              <input type="checkbox" />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="product-item">
        <img
          src={productImage}
          alt="product visuals"
          className="product-image"
        />
        <div className="product-data">
          {/* <div className="product-item-alpha"> */}
          <p className="product-name"> Chokolate cakes</p>
          {/* </div> */}
          <div className="product-item-meta">
            <span className="product-category"> Cakes </span>
            <span className="product-date"> 19.08.2018 </span>
            <span className="product-status"> PROCESSED </span>
            <span className="product-action">
              {" "}
              <input type="checkbox" />{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
