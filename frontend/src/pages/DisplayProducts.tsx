import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../CSS/Product.css"
type Product = {
   id: string;
  name: string;
  price: number;
  pictureUrl: string;
}


function DisplayProducts() {
  const [media, setMedia] = useState<Product[] | null>(null); //<Media | null> means that the value will be either Media or null

  useEffect(() => {
    fetch("http://localhost:3000/api/media")
      .then((response) => response.json())
      .then((data) => setMedia(data.products));
  }, []);

  if (!media) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul className="list-products">
        {media.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />)
        )}
      </ul>
    
    </div>
  );
}

export default DisplayProducts;