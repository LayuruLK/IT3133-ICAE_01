import '../assets/CSS/layout.css';
import { flowers } from './FlowerDB';
import Product from './Product';
import { useState } from 'react';


export default function Products(){
    const [items, setItems] = useState([]);
   
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
                            <Product key={flower.id} item={flower}/>
                        ))
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart

                }
            </div>
        </>
    );

}