import React, { useContext } from 'react'
import styled from 'styled-components'
import CartContext from '../cartContex'

function Productcarousell({title, image, price, rate}) {

    const { addToCart} = useContext(CartContext)
  
    return (
        <Div>
           

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
                    <div><button onClick={() => addToCart && addToCart(title, image, price, rate)}>Add to cart</button></div>

                </div>
            </div>
        </Div>
    )
}

export default Productcarousell

const Div = styled.div`
.containner{
    margin: 8px;
    border: 1px solid orange;
    box-shadow: 0px 0px 10px orange;
    width: 280px;
    border: 1px solid blue;
    gap: 20px;
    /* height: 410px; */

}
.product-box {
    width: 100%;
    height: 250px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* border: 1px solid blue; */
    align-items: center;
   
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    background-color: orange;
    color: #fff;
    padding: 8px;
}
.rate-price {
    color: #fff;
    padding: 5px 10px;
    background-color: orange;
    line-height: 1.5rem;
    text-align: left;
}  
button{
    padding: 5px;
    border: none;
    color: white;
    /* width: 300px; */
    background-color: orange;
   margin-left: 35%;
   font-size: 16px;

} 
button:hover {
    cursor: pointer;
    border-radius: 20px;
    border: 1px solid white;
}
`