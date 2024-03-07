import React, { useContext } from 'react'
// import {IonShirtOutline} from "react-icons/io5"
import { FiShoppingCart } from "react-icons/fi";
import styled from 'styled-components';
import CartContext from './cartContex';

function Card({ title, price, image, rate }) {

    const { addToCart } = useContext(CartContext)
    return (
        <div>
            <Div className='card'>
                <div className='containner'>
                    <div className='product-box'>
                        <div className='product-box1'><img src={image} /></div>
                    </div>
                    <div className='purchase'>
                        <h5>{title}</h5>
                        {/* <FiShoppingCart size={30} /> */}
                    </div>

                    <div className='rate-price'>
                        <h4>${price}</h4>
                        <h4>Rate : {rate}</h4>
                        <button onClick={() => addToCart && addToCart(title, image, price, rate)}  > Add to cart</button>
                    </div>
                   
                </div>

            </Div>

        </div>
    )
}

export default Card

const Div = styled.div`

.card {
    /* border: 1px solid red;
    padding: 25px; */
    padding: 0px;
    margin:  10px;
    
   
}
 .containner {
    margin-bottom: 1px ;
} 
.product-box {
    width: 95%;
    height: 250px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background-color: #fff
   
   
}
.product-box, .product-box1 {
    /* text-align: center; */
    height: 260px;
}
img {
    padding: 5px;
    height: 100%;
    width: 100%;
}
.purchase {
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    margin-top: 8px;
    background-color: orange;
    color: #fff;
    padding: 0px 8px;
    font-size: 18px;
}
.rate-price {
    color: #fff;
    padding: 8px;
    background-color: orange;
    /* line-height: 1.1rem;  */

}
.rate-price button {
    padding: 5px;
    border-radius: 8px;
    color: orange;
    background-color: #eee;
    font-size: 14px;
    border: none;
    width: 100%;
}
.rate-price button:hover {
    cursor: pointer;
    background-color: #fff;
}
`