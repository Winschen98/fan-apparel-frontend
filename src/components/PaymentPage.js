import React, { useState, useEffect } from 'react';
import { Col, Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { savePaymentMethod } from '../actions/bagActions';
import CheckoutSteps from '../components/CheckoutSteps';



function PaymentPage({ history }) {

    const bag = useSelector(state => state.bag)
    const {shippingAddress} = bag
   
    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/order')
    }

    // check if user has filled out shipping info, else redirect
    if (!shippingAddress.address){
        history.push('/shipping')
    }

    return (
        <FormContainer>
            {/* pass in 3 props since we are currently on the third step */}
            <CheckoutSteps step1 step2 step3 /> 

            <Form onSubmit={submitHandler}>
                <Form.Group> 
                    <Form.Label as='legend'> Select Method </Form.Label> 
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal or Credit Card'
                            id='paypal'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value) }
                        >
                        
                        </Form.Check> 
                    </Col>
                </Form.Group>

                <Button type='submit' variant='primary'> 
                    Continue
                </Button> 
            </Form> 
        </FormContainer>
    )
}

export default PaymentPage;