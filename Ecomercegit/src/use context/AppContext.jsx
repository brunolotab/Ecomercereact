import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Products from './Products'
// import Checkout from './Checkout'
import { CartContextProvider } from './cartContex'
import Checkout2 from './checkout2'

function AppContext() {
    return (
        <div>
            <CartContextProvider>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path='/' element={<Products />} />
                        {/* <Route path='/Checkout' element={<Checkout/>} /> */}
                        <Route path='/Checkout2' element={<Checkout2 />} />

                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </div>
    )
}

export default AppContext