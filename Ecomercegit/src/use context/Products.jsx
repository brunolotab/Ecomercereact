import React, { useContext } from 'react'
// import { Data } from '../E commerce/All datas/Data'
// import Carts from './Card';
import styled from 'styled-components';
import Card from './Card';
import CartContext from './cartContex';
import Appcarouselll from './Carousecontex/Appcarousel';
import { Data } from './Data';

function Products() {
    const productlist = Data;
    const mainlist = productlist.filter((product) => { return product.category === "women's clothing" });
    const { searchTerm, setSearchTerm } = useContext(CartContext);
    return (
        <Siv>
            {/* <div><input type='text' placeholder='Search here...' onChange={(e)=> {setSearchTerm(e.target.value)}}/></div> */}
            <div className='product-list'>
                {/* {productlist.filter((product)=> { return product.category === "women's clothing"}); */}
                {
                    mainlist.filter((val) => {
                        if (searchTerm === '') {
                            return val;
                        } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    })

                        .map((item, i) => (<div key={i} className='product-map'><Card title={item.title} price={item.price} image={item.image} rate={item.rating.rate} /></div>))}

            </div><br />
            <div><Appcarouselll /></div>

        </Siv>
    )
}

export default Products

const Siv = styled.div`
padding: 10px;

/* .product-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    padding: 8px;
    width: 100%;
} */
.product-list {
    display: grid;
   grid-template-columns: repeat(4, 300px);
   grid-gap:40px;
   /* grid-auto-rows: 380px; */
   margin:10px 0px;
   padding: 8px 8px 0px 8px;
    /* width: 100%; */
   
    
}
.product-map {
    /* border: 1px solid red; */
    /* padding: 5px; */
    box-shadow: 0px 0px 15px orange;
    /* margin: 100px 0px; */
    background-color: orange;
    
}
 `
