import { Container } from '@mui/material'
import ProductList from 'Container/Product/ProductList'
import { count } from 'node:console'

import { useState } from 'react'

type playIn = {
    count: number
}
type catrData = {
    totalPrice: number
}

const App = () => {
    const [playIn, setPlayIn] = useState<playIn>({
        count: 0,
    })

    const changeCurrency = (price: number) => {
        setPlayIn((prevState) => ({
            count: prevState.count + price * 1.2,
        }))
    }
    const [catrData, setCartData] = useState<catrData>({
        totalPrice: 0,
    })

    const addProductToCart = (count: number) => {
        setCartData((prevState) => ({
            totalPrice: prevState.totalPrice + count,
        }))
    }

    return (
        <>
            <Container>
                <ProductList
                    catrData={catrData}
                    addProductToCart={addProductToCart}
                    playIn={playIn}
                    changeCurrency={changeCurrency}
                />
            </Container>
        </>
    )
}

export default App
