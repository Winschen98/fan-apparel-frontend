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
            
        </div>
    )
}

export default OrderPage
