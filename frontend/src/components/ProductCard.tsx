import "../CSS/Product.css"
import { useNavigate } from "react-router-dom";
type Product = {
   id: string;
  name: string;
  price: number;
  pictureUrl: string;
}
type ProductCardProps = {
   product: Product;
}


function ProductCard({product}: ProductCardProps ){  
    const navigate = useNavigate();
    function DirectBuyer(){
        navigate("/payment", { state: { productId: product.id, productName: product.name }});
    }
    return (
        <div className="product-card">
            <img className="product-image" src={product.pictureUrl}/>
            <div className="product-name">
                {product.name}
            </div>
            <div className="product-price">
                {product.price}
            </div>
            <button className="buy-button" onClick={DirectBuyer}>Buy</button>
        </div>
    )
}

export default ProductCard