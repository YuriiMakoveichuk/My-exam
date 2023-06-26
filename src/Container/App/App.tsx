import { Container } from '@mui/material'
import ProductList from 'Container/Product/ProductList'

import { useState } from 'react'

type catrData = {
    totalPrice: number
}

const App = () => {
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
                />
            </Container>
        </>
    )
}

export default App
