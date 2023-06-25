import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import { count } from 'console'

type Props = {
    catrData: {
        totalPrice: number
    }
    addProductToCart: (price: number) => void

    playIn: {
        count: number
    }
    changeCurrency: (price: number) => void
}

const ProductList = ({
    catrData,
    addProductToCart,
    playIn,
    changeCurrency,
}: Props) => {
    const [currency, setCurrency] = useState<string>('USD')

    const changeCurrencyPln = () => {
        setCurrency((prevState) => (prevState === 'USD' ? 'PLN' : 'PLN'))
    }
    const changeCurrencyUsd = () => {
        setCurrency((prevState) => (prevState === 'PLN' ? 'USD' : 'USD'))
    }
    const changeCurrencyEur = () => {
        setCurrency((prevState) => (prevState === 'PLN' ? 'EUR' : 'EUR'))
    }
    const changeCurrencyUah = () => {
        setCurrency((prevState) => (prevState === 'PLN' ? 'UAH' : 'UAH'))
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
            <Typography align="center" margin="0 0 40px">
                <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                >
                    <Button
                        // onClick={() => changeCurrency(760)}
                        onClick={() => changeCurrencyUsd()}
                    >
                        USD
                    </Button>

                    <Button onClick={() => changeCurrencyEur()}>EUR</Button>
                    <Button onClick={() => changeCurrencyUah()}>UAH</Button>
                    <Button onClick={() => changeCurrencyPln()}>PLN</Button>
                </ButtonGroup>
            </Typography>

            <Grid container spacing={12}>
                {productsArray.map(({ id, title, description, price }) => (
                    <Grid item md={4}>
                        <ProductListItem
                            id={id}
                            title={title}
                            description={description}
                            price={price}
                            addProductToCart={addProductToCart}
                            changeCurrency={changeCurrency}
                            playIn={playIn}
                            currency={currency}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" align="center" margin="30px 0 0">
                Total: {catrData.totalPrice}
            </Typography>
        </>
    )
}

export default ProductList
