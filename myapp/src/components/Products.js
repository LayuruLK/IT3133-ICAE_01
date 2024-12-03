import '../assets/CSS/layout.css';
import Cart from './Cart';
import { flowers } from './FlowerDB';
import Product from './Product';
import { useState } from 'react';


export default function Products(){
    const [items, setItems] = useState([]);

    const addtoCart = (item, quantity) => {
        const existingItem = items.find(flower => flower.id === item.id);

        if (existingItem) {
            existingItem.qty += quantity;
            setItems([...items]);
        }

        else {
            setItems([...items, {...item, qty: quantity}]);
        }
    }
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        flowers.map((flower =>
                            <Product key={flower.id} item={flower} addtoCart={addtoCart}/>
                        ))
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                    <Cart items={items}/>
                }
            </div>
        </>
    );

}