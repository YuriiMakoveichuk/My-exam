import { useState } from 'react'
import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'

type Props = {
    catrData: {
        totalPrice: number
    }
    addProductToCart: (price: number) => void
}

type Currency = {
    count: number
    class: string
}

const ProductList = ({ catrData, addProductToCart }: Props) => {
    const [currency, setCurrency] = useState<Currency>({
        count: 1,
        class: 'USD',
    })
    const addCurrency = (play: number, muy: string) => {
        setCurrency(() => ({
            count: play,
            class: muy,
        }))
    }

    return (
        <>
            <Typography
                variant="h3"
                component="div"
                align="center"
                margin="30px 0 20px"
            >
                Our Shop Page
            </Typography>
            <Typography align="center" margin="50px 0 ">
                <ButtonGroup>
                    <Button onClick={() => addCurrency(1, 'USD')}>USD</Button>

                    <Button onClick={() => addCurrency(0.92, 'EUR')}>
                        EUR
                    </Button>
                    <Button onClick={() => addCurrency(37.1, 'UAH')}>
                        UAH
                    </Button>

                    <Button onClick={() => addCurrency(4, 'PLN')}>PLN</Button>
                </ButtonGroup>
            </Typography>
            <Grid container spacing={12}>
                {productsArray.map(({ id, title, description, price }) => (
                    <Grid item md={4} key={id}>
                        <ProductListItem
                            id={id}
                            title={title}
                            description={description}
                            price={price}
                            addProductToCart={addProductToCart}
                            currency={currency}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" align="center" margin="30px 0 0">
                Total: {catrData.totalPrice * currency.count}
            </Typography>
        </>
    )
}

export default ProductList
