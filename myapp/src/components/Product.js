import { useState } from 'react';
import '../assets/CSS/layout.css';
export default function Product({item, addtoCart}){
    const [quantity, setQuentity] = useState(0);

    const handleAddtoCart = () =>{
        if(quantity>0) {
            addtoCart(item, quantity);
            setQuentity(0);
        }
    }
    
    return(
        <div className="grid-item">

            <div class="card">
                <img  src={require('../assets/image/'+ item.img)}/>
                <div class="card-body">
                    <h5 class="card-title">{item.name} Price: {item.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuentity(Number(e.target.value))}/>
                    </div>
                    <button class="card-button"  onClick={handleAddtoCart} >Add to Cart</button>
                </div>
            </div>
        </div>
    );
}