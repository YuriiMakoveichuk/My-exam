import { Button, CardContent, Typography } from '@mui/material'
import Card from '@mui/material/Card'

type Props = {
    id: number
    title: string
    description: string
    price: number
    addProductToCart: (price: number) => void
    currency: {
        count: number
        class: string
    }
}

const ProductListItem = ({
    id,
    title,
    description,
    price,
    currency,
    addProductToCart,
}: Props) => {
    return (
        <>
            <Card variant="outlined">
                <CardContent>
                    <Typography
                        variant="h4"
                        component="div"
                        align="center"
                        margin="20px 0 20px"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        align="center"
                        margin="0 0 20px"
                    >
                        {description}
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        align="center"
                        margin="0 0 20px"
                    >
                        <div key={id}>
                            {currency.class} : {price * currency.count}
                        </div>
                    </Typography>
                    <Typography align="center">
                        <Button
                            variant="outlined"
                            onClick={() => addProductToCart(price)}
                        >
                            Buy
                        </Button>
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductListItem
