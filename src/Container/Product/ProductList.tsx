import ProductListItem from './ProductListItem'
import productsArray from 'utils/productsArray'
import { Button, Grid, Typography } from '@mui/material'
import { useState } from 'react'

type Props = {
    catrData: {
        totalPrice: number
    }
    addProductToCart: (price: number) => void
}
const ProductList = ({ catrData, addProductToCart }: Props) => {
    const [currency, setCurrency] = useState<string>('USD')

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

            <Button
                // onClick={() => changeCurrency(760)}
                onClick={() => setCurrency('USD')}
            >
                USD
            </Button>

            <Button onClick={() => setCurrency('EUR')}>EUR</Button>
            <Button onClick={() => setCurrency('UAH')}>UAH</Button>
            <Button onClick={() => setCurrency('PLN')}>PLN</Button>

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
                Total: {catrData.totalPrice}
            </Typography>
        </>
    )
}

export default ProductList
