import { useSelector } from "react-redux";
import "./_products.scss";
import productSlice from "../../store/slices/productSlice";

const Products = () => {
  const productData = useSelector(productSlice.getInitialState)

  return (
    <div>
      {productData.map((product, key) => {
        return (
          <div className="mx-5 p-3 col-lg-3 col-md-6 product-card">
            <div className="product-image-container">
              <img src="@@" alt="Product" />
            </div>
            <div className="product-info">
              <h5>
                <a href="#"> {product.pName}</a>
              </h5>
              <p className="product-price">{product.price}</p>
              <div className="product-rating">
                <i className="fa fa-star"/>
                <i className="fa fa-star"/>
                <i className="fa fa-star"/>
                <i className="fa fa-star"/>
                <i className="fa fa-star"/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
