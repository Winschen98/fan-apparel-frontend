import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Card, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';

function OrderPage() { 
    const bag = useSelector(state => state.bag)

    //set new calculated attributes to bag
    bag.subTotal = bag.bagItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2);
    bag.shippingPrice = bag.subTotal > 200 ? 'Free' : '$9.99'

    const submitOrder = () => {
        console.log('order submitted')
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 /> 
            <Row> 
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2> 
                            <p> 
                                <strong>DELIVERY TO: </strong> 
                                {bag.shippingAddress.address}, {bag.shippingAddress.city} {' '} {bag.shippingAddress.postalCode}, {bag.shippingAddress.country}.
                            </p> 
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment</h2> 
                            <p> 
                                <strong>METHOD: </strong> 
                                {bag.paymentMethod}
                            </p> 
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                            <h2>Order</h2> 
                            {/* Check if there are items checked out */}
                            {bag.bagItems.length === 0 ? 
                                <h4>
                                    Your bag is empty...{' '}
                                    <Link to='/' style={{ color: '#92CEF6' }}>
                                        Continue Shopping?
                                    </Link>
                                </h4> : (
                                <ListGroup variant='flush'> 
                                    {bag.bagItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row> 
                                                <Col md={2} sm={3}>
                                                    <Link to={`/product/${item.product}`}>
                                                        <Image src={item.image} alt={item.name} fluid thumbnail /> 
                                                    </Link> 
                                                </Col> 

                                                <Col> 
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link> 
                                                </Col>

                                                <Col md={4} sm={3}>
                                                    <Row>Price: ${item.price} </Row>
                                                    <Row>Quantity: {item.quantity}</Row>
                                                    <Row>Sub-total: ${(item.quantity * item.price).toFixed(2)} </Row>       
                                                </Col> 
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )} 
                        </ListGroup.Item>

                    </ListGroup> 
                </Col>     

                <Col md={4}>
                    <Card>
                        <Card.Header>Summary</Card.Header>
                        <ListGroup.Item>
                            <Row> 
                                <Col>Sub-total:</Col>
                                <Col>${bag.subTotal}</Col>  
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row> 
                                <Col>Tax:</Col>
                                <Col>${bag.taxPrice}</Col>  
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row> 
                                <Col>Shipping:</Col>
                                <Col>{bag.shippingPrice}</Col>  
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row> 
                                <Col>Total:</Col>
                                <Col>${bag.totalPrice}</Col>  
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button 
                                type='button'
                                className='btn-block'
                                variant="outline-dark"
                                disabled={bag.bagItems.length === 0}
                                onClick={submitOrder}
                            >
                                Order and Pay
                            </Button> 
                        </ListGroup.Item>
                    </Card>
                </Col> 
            </Row> 
        </div>
    )
}

export default OrderPage
