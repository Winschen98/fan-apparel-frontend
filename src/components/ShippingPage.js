import React, { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../actions/bagActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingPage({history}) {

    const bag = useSelector(state => state.bag)
    const {shippingAddress} = bag

    const dispatch = useDispatch()

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.City);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({address, city, postalCode, country}));
        history.push('/payment');
    }

	return(
        <FormContainer>
            <CheckoutSteps />
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
					<Form.Label>Address</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter Address'
                        // address should not  be null value
						value={address ? address : ""}
						onChange={(event) => setAddress(event.target.value)}>
                    </Form.Control>
				</Form.Group>

                <Form.Group controlId='city'>
					<Form.Label>City</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter City'
                        // should not  be null value
						value={city ? city : ""}
						onChange={(event) => setCity(event.target.value)}>
                    </Form.Control>
				</Form.Group>

                <Form.Group controlId='PostalCode'>
					<Form.Label>Postal Code</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter Postal Code'
                        // should not  be null value
						value={postalCode ? postalCode : ""}
						onChange={(event) => setPostalCode(event.target.value)}>
                    </Form.Control>
				</Form.Group>

                <Form.Group controlId='country'>
					<Form.Label>Country</Form.Label>
					<Form.Control
						required
						type='text'
						placeholder='Enter Country'
                        // should not  be null value
						value={country ? country : ""}
						onChange={(event) => setCountry(event.target.value)}>
                    </Form.Control>
				</Form.Group>

                <Button type='submit' variant='primary'>
                    Continue 
                </Button>
            </Form>
            
        </FormContainer>
    )
}

export default ShippingPage;
