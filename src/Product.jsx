import "./Product.css";
import Price from "./Price";
function Product({Title}) {
    return(
        <div className="Product">
           <p>{Title}</p>
           <p>Description</p>
           <p>Price</p>
        </div>
    )
}

export default Product; 