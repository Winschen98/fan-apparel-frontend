import React, { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';

function ShippingPage({history}) {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');

    function submitHandler(){
        console.log('temp sub handler')
    }

	return(
        <FormContainer>
            <Form onSubmit={submitHandler}>
                temp
            </Form>
            
        </FormContainer>
    )
}

export default ShippingPage;
