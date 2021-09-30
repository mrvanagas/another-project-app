import React from 'react'
import { Card, Grid, Button, Image } from 'semantic-ui-react'
import fakeData from '../fakeData.json'

function Products() {
    return (
        <div>
            <h1>Products</h1>
            <Grid columns={3}>
                {fakeData.map((fakeData, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                            <Image src={fakeData.image} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{fakeData.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Category</strong>
                                        <p>{fakeData.category}</p>
                                        <strong>Price</strong>
                                        <p>{fakeData.price}</p>
                                    </Card.Description>
                                    <Button>Buy now</Button>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Products
