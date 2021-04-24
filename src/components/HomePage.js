import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductCard from './ProductCard'
import axios from 'axios'

function Home() {
    // use filter to store newly released items as an array variable
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get('/products/');
            setProducts(data)
        }
        fetchProducts()

    }, [])


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
