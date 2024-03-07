import React, { createContext, useEffect, useRef, useState } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  // chidren represent all the components that are wrap in CartContextProvider
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([]);
  
  const [totalcost, setTotalcost] = useState('')
  // const [addmore, setAddmore] = useState(1);
  
  // console.log(addmore)
  // console.log(totalcost)
  // const [checkItem, setCheckItem] = useState([])


  // const handleadd = (item) =>{
  //   // console.log(item);
  //   // setCheckId(item.price)
  //   // const add = items.find(ite =>(ite.price === item.price))
  //   // if (addmore){
  //   //   setAddmore(addmore + 1)}
  //     if(item){
  //       item.quantity +1
  //    }
  //   }
  //   console.log(items.quantity +1);
    
  // const handlesubtract = (c) =>{
  //   if (addmore >1){
  //     setAddmore( addmore - 1)}
  //   }
  //   const price = [items && items?.map((ite)=> {return ite.image})];

  // const sum = price.reduce((previousValue, currentValue, index) => previousValue +currentValue, 0);
  
  // setTotalcost(()=> {return sum})
  // setTotalcost([items && items?.map((ite)=> {return ite.image})  *addmore].reduce((previousValue, currentValue, index) => previousValue +currentValue, 0));
  

  // const itemprice = setCost(price * addmore);

  // useEffect(()=>{
  //   const sum = price.reduce((previousValue, currentValue, index) => previousValue +currentValue, 0);
  //   setTotalcost(sum)

  // }, )
  // console.log(totalcost)
  // const addToCart = (title, price, image, rate) => {
  //   const newObject = {title, price, image, rate}
  //   const index = items.findIndex(item => item === newObject)
  //   if(index !== -1){
      
  //   }
  //   setItems((prevState) => [...prevState, { title, price, image, rate }])
  // }
  // localStorage.setItem('user', JSON.stringify(items));

  // const myitems = JSON.parse(localStorage.getItem('user'));
  // console.log(myitems)

  // const [checkItem, setCheckItem] = useState([myitems])




  const addToCart = (title, price, image, rate) => {
    const newObject = { title, price, image, rate, quantity: 1 };
    console.log(newObject.quantity);
  
    const itemIndex = items.findIndex(item =>
      item.title === title && item.price === price && item.image === image && item.rate === rate
    );
  
    if (itemIndex === -1) {
      setItems(prevState => [...prevState, newObject]);
    } else {
      const updatedItems = [...items];
      updatedItems[itemIndex].quantity += 1;
      setItems(updatedItems);
    }

    localStorage.setItem('user', JSON.stringify(items));

  };

  // localStorage.setItem('user', JSON.stringify(items));

  console.log(items);
  

    // const handleadd = () =>{
    // const neewObject = { title, price, image, rate, quantity: 1 };
    // console.log(neewObject.quantity);

    
    // // if(c === 1){
    // newObject.quantity += 1
    //   //  }
      
    //   console.log(newObject.quantity );
  //}
 

  // const addToCart = (title, price, image, rate) => {
  //   const newObject = { title, price, image, rate };
  
  //   const isObjectInCart = items.some(item =>
  //     item.title === title && item.price === price && item.image === image && item.rate === rate
  //   );
  
  //   if (!isObjectInCart) {
  //     setItems(prevState => [...prevState, newObject]);
  //   } else {
  //     alert('Item already in the cart');
  //   }
  // }

  // const myitems = JSON.parse(localStorage.getItem('user'));
  // console.log(myitems)

  // const [checkItem, setCheckItem] = useState(myitems)

  const checkItem = useRef(JSON.parse(localStorage.getItem('user')));

  console.log(checkItem)

  const isInCart = items.includes(addToCart);
  console.log(isInCart)

//   const handleremove = (item) => {
//     // const list = [...items];
//     // list.splice(-item, 1)
//      const delet = checkItem.filter((to)=>{return to.price !== item.price});
     
//      checkItem.current = delet;
//     // setItems(list);
//     // console.log(delet)
    
//       localStorage.removeItem(item);
//       // setCheckItem([])
//       checkItem.current = ([])
  

// }

//   const togglecartitem = ()=>{
//     if (isInCart){
//         setItems(items.filter(item => item !== items))
//     }else{
//         // setItems([...items, itemToAdd])
//         setItems([addToCart]);
//     }
    
// }


  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      searchTerm, 
      setSearchTerm,
      //  handleremove, 
      //  addmore, 
      //  handleadd, 
      //  handlesubtract,
       totalcost,
      //  checkId,
       setItems,
      //  myitems,
      //  checkItem,
      //  setCheckItem
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
