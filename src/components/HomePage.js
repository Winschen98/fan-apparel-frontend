import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../resources/products'
import ProductCard from './ProductCard'

function Home() {
    // use filter to store newly released items as an array variable

    return (
        <div>
            <h1>New Releases</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={6} md={6} lg={4} xl={3}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home
