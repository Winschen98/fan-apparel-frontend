import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

function RegistrationPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<FormContainer>
			<h1 className='mt-4'>Sign Up</h1>
			<Form>
				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter Email'
						value={email}
						onChange={(event) => setEmail(event.target.value)}></Form.Control>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Enter Password'
						value={password}
						onChange={(event) =>
							setPassword(event.target.value)
						}></Form.Control>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Re-Enter Password'
						value={password}
						onChange={(event) =>
							setPassword(event.target.value)
						}></Form.Control>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Sign Up
				</Button>
			</Form>
		</FormContainer>
	);
}

export default RegistrationPage;
