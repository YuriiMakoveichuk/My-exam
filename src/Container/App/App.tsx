import { useState } from 'react'
import { Container } from '@mui/material'
import ProductList from 'Container/Product/ProductList'

type CatrData = {
    totalPrice: number
}

const App = () => {
    const [catrData, setCartData] = useState<CatrData>({
        totalPrice: 0,
    })

    const addProductToCart = (price: number) => {
        setCartData((prevState) => ({
            totalPrice: prevState.totalPrice + price,
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
