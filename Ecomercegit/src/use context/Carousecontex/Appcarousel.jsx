import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Data } from '../../E commerce/All datas/Data';
// import Productcarousel from '../../reactCarousel/Productcarousel';
// import { responsive } from '../../reactCarousel/CarouselData';
import styled from 'styled-components';
import Productcarousell from './productitem';
import { responsives } from './responsivedata';
import { Data } from '../Data';

function Appcarouselll() {

   

    const productlist = Data;
    const mainlist = productlist.filter((product) => { return product.category === "electronics" });
    const items = mainlist.map(item => (
        <Productcarousell image={item.image} title={item.title} price={item.price} rate={item.rate} />
    ))

    return (
        <div style={{ textAlign: 'center', padding:'15px' }}>
            <h1>React multi carousel</h1>
            <Carousel responsive ={responsives}>
               {items}
               
            </Carousel>
        </div>
    )
}

export default Appcarouselll

// const Carousel = styled.div`
// .package{
//     padding: 10px;
// }
// `