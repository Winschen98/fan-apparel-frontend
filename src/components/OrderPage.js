import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Card, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';

function OrderPage() {
    const bag = useSelector(state => state.bag)

    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 /> 
            <Row> 
                <Col>
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
                            <h1>Bag is currently empty</h1> : (
                                <ListGroup variant='flush'> 
                                    {bag.bagItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row> 
                                                <Col md={1} sm={3}>
                                                    <Link to={`/product/${item.product}`}>
                                                        <Image src={item.image} alt={item.name} fluid thumbnail /> 
                                                    </Link> 
                                                </Col> 

                                                <Col> 
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link> 
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )} 
                        </ListGroup.Item>

                    </ListGroup> 
                </Col>     
            </Row> 
        </div>
    )
}

export default OrderPage
