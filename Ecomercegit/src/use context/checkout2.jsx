import React, { useContext, useEffect, useRef, useState } from 'react'
import CartContext from './cartContex'
import styled from 'styled-components'
import { FiTrash } from 'react-icons/fi';


function Checkout2() {

    const { items, setItems, checkItem} = useContext(CartContext);
    const [nomore, setNomore] = useState(false)

  const myitems = useRef (JSON.parse(localStorage.getItem('user')));
  


//   const [checkItem, setCheckItem] = useState(myitems)


    

   // console.log(checkItem);
   // console.log(myitems);
   
    // function cost (){
    //     const sell = items.map((ite)=> ite.image);
    //     const updatesell = sell.reduce((accumulator, currentValue)=>{return accumulator + currentValue},0) ;
    //     return updatesell;
        
    // }

    // const [totalCost,setTotalCost] = useState(cost)
    // console.log(items)
    
    // console.log(totalCost)

    const [totalAmount, setTotalAmount] = useState(0);
    // const [amount, setAmount] = useState([])
    // console.log(amount);

  useEffect(() => {
    let total = 0;
    myitems.current && myitems.current.forEach(item => {
      total += item.quantity * item.image;
    });
    setTotalAmount(total);
  }, [myitems.current]);

//   function chooseColor (){

//   }
    const[isDisable, setIsDisable] = useState(false);
  

    const [color, setColor] = useState(false);

    const handleadd = (id) => {
        const updatequantity = [...myitems.current]
        updatequantity[id].quantity += 1;
        myitems.current = updatequantity;
      //   generatecolor()
//if (updatequantity[id].quantity === 1){
            //  setColor(id)

        //}
        
    }
   
    
   //  function generatecolor (){
   //      const updatequantity = [...items]
   //      updatequantity.quantity === 1;
   //      if(updatequantity.quantity){
   //          setColor(color)
   //      }else( setColor(!color))
   //  }


    const handlesubtract = (id) => {
        const updatequantity = [...myitems.current]
        if (updatequantity[id].quantity > 1) {
            updatequantity[id].quantity -= 1;
            myitems.current = updatequantity;
            setIsDisable(false)
            // setGameover(false)

        };
      // if (updatequantity[id].quantity === 1) {
         
      //    setIsDisable(true)}

    }

    // const generatecost =()=>{
    //     const price = [items && items?.map((ite)=> {return ite.image})];
    //     setTotalCost(price * 2)
    // }  

    const handleremove = (item) => {
          
           const delet = myitems.current && myitems.current.filter((to)=>{return to.price !== item.price});
           
          
         //  setItems(delet);

          myitems.current = delet;
          // console.log(delet)
         //  localStorage.setItem('cartlist', JSON.stringify(delet))
          
            // localStorage.removeItem(myitems.current);
    }
        
    

    return (
        <Piv>
            <h2>checkout your items</h2>

            {/* {myitems.current.length === 0 && (<div><p>You have no items</p></div>)} */}
            {myitems.current && myitems.current.length === 0 && (<div><p>You have no items</p></div>)}
            <div className='checkout'>
                <div className='shopping-bad' >
                    {myitems.current && myitems.current?.map((item, i) => (
                        <div className='mapitem' key={i}>
                            <div className='imgitem' >
                                <div className='image'><img src={item.price} /></div>
                                <div className='titleprice'>
                                    <h4>{item.title}</h4>
                                    {/* <p>${item.image}</p> */}
                                    <p style={{color: color? 'orange': 'black'}}>${item.image*item.quantity}</p>
                                    {/* <p className='updateprice' style={{ float: 'right' }}>${item.image*item.quantity}</p> */}
                                    <p>Rate:{item.rate}</p>
                                    <p>In Stock</p>
                                </div>

                            </div>
                            <div className='flexbutton'>
                                <div className=' flexbuttondiv'><FiTrash size={25} color='orange'/><button style={{backgroundColor:'#fff', color:'orange', fontSize:'16.5px', marginLeft:'10px'}} onClick={() => handleremove(item)}> REMOVE</button></div>
                                <div style={{ padding: '10px' }}>
                                    <button onClick={()=> handlesubtract(i)} style={isDisable ? styled.disabledbutton : styled.enabledbutton } disabled ={isDisable}> - </button>
                                    <span style={{ padding: '5px' }}>{item.quantity}</span>
                                    <button onClick={()=> handleadd(i)}> + </button>
                                </div>
                            </div>

                        </div>


                    ))}
                </div>
                <span className='summarypost'>
                    <div style={{ padding: '1px' }}>
                        <div className='cart-summary'>
                            <div className='summary'><h3>CART SUMMARY</h3></div>
                            <div className='subtotal'>
                                <h4>Subtotal <span style={{ float: 'right' }}>${totalAmount}</span></h4>
                                <p>Delivery fees not included yet.</p>
                            </div>
                            <div className='btn-summary'><button className='btncheck'>CHECKOUT(${totalAmount.toFixed(2)})</button></div>
                        </div>
                        <br />
                        <div className='return'>
                            <h4>Returns are easy</h4>
                            <p>free return within & days for ALL eligible items</p>
                            <p>Details</p>
                        </div>
                    </div>

                </span>
            </div>

        </Piv >
    )
}

export default Checkout2

const Piv = styled.div`
 /* .shopping-bad {
    display: flex;
    width: 55%;
    flex-wrap: wrap ;
    justify-content: space-around;
    align-items: center;
    margin: 8px; */
    /* height: 370px; */
    /* border: 1px solid red;
    background-color: #777;
    float: left;
    margin-left: -170px;
    
 }  */
 .shopping-bad {
    display: block;
    width: 70%;
    /* flex-wrap: wrap ; */
    /* justify-content: space-around; */
    align-items: center;
    margin: 8px;
    /* height: 170px; */
    /* border: 1px solid green; */
    background-color: #fff;
    margin-left: 20px;
    border-radius: 15px;
    box-shadow: 0px 0px 20px #ddd;

    padding: 5px;
    
 } 
 .mapitem {
    width: 100%;
    height: 200px;
    /* box-shadow: 0px 0px 18px #eee; */
    /* padding: 5px; */
    /* margin: 10px; */
    border-bottom: 1px solid #ccc;
    
 }  
 .imgitem {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    height: 60%;
    
 }
 img {
    width: 100%;
    height: 100%;
    
 }
 .checkout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    /* border: 1px solid yellow; */
    padding: 8px;
    
 }

 .image{
    width: 100px;
    height: 100px;
    object-fit: cover;
 }
 .image img {
    width: 100%;
    height: 100%;
 }
 .titleprice {
    line-height: 1.4rem;
    margin-left: 18px;
 }

 .flexbutton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
 }
 .flexbutton button {
    margin-top: 4px;
    padding: 6px;
    border: none;
    font-size: 18px;
    background-color: orange;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;

 }
 .flexbuttondiv {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
 }
 /* .summarypost {
    position: sticky;
    top: 200px;
    /* position: sticky; */
 
 .cart-summary {
    padding: 10px;
    border: 1px solid #eee;
    box-shadow: 0px 0px 15px #ddd;
    border-radius: 8px;
    /* width: 40%; */

 }
 .summary {
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
 }
 .subtotal {
    padding: 8px 0px;
    line-height: 1.5rem;
    border-bottom: 1px solid #ccc;
 }
 .btn-summary {
    padding: 10px 0px;
    width: 280px;
    /* justify-content: space-around;
    align-items: center; */
 }
 .btncheck {
    width: 100%;
    justify-content: space-around;
    align-items: center; 
    padding: 10px 0px;
    background-color: orange;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color : white

 }
 .return {
    border: 1px solid #eee;
    line-height: 1.5rem;
    padding: 10px;
    box-shadow: 0px 0px 18px #eee;
    border-radius: 8px;

 }
 .return p, .subtotal p {
    font-size: 13px;
    font-family: sans-serif;
 }
 .disabledbutton {
   background-color: gray;
   color: #fff;
   cursor: not-allowed;
   box-shadow: 0px 0px 10px 0px grey;
 }
 .enabledbutton {
   margin-top: 4px;
    padding: 6px;
    border: none;
    font-size: 18px;
    background-color: orange;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
 }
 /* .updateprice {
    display: flex;
    justify-content: end;
 } */

`