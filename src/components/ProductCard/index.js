import './index.css'

const ProductCard = ({ imageUrl, title, price }) => {
    return (
      <div className="product-card">
        <img src={imageUrl} alt={`${title}`} className="product-img"/>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    );
  };
export default ProductCard