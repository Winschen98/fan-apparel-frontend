import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions';

function RegistrationPage({ location, history }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	const dispatch = useDispatch();

	const redirect = location.search ? location.search.split('=')[1] : '/';

	function registrationHandler(event) {
		event.preventDefault();

		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			dispatch(register(name, email, password));
		}
	}

	const userLogin = useSelector((state) => state.userLogin);
	const { error, loading, userCredentials } = userLogin;

	useEffect(() => {
		if (userCredentials) {
			history.push(redirect);
		}
	}, [history, userCredentials, redirect]);

	if (loading) {
		return <Loader />;
	}
	return (
		<FormContainer>
			<h1 className='mt-4'>Sign Up</h1>

			{message && <h6 style={{ color: 'red' }}>{message}</h6>}

			<Form onSubmit={registrationHandler}>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						required
						type='name'
						placeholder='Enter Name'
						value={name}
						onChange={(event) => setName(event.target.value)}></Form.Control>
				</Form.Group>

				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<Form.Control
						required
						type='email'
						placeholder='Enter Email'
						value={email}
						onChange={(event) => setEmail(event.target.value)}></Form.Control>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						required
						type='password'
						placeholder='Enter Password'
						value={password}
						onChange={(event) =>
							setPassword(event.target.value)
						}></Form.Control>
				</Form.Group>

				<Form.Group controlId='confirm-Password'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						required
						type='password'
						placeholder='Re-Enter Password'
						value={confirmPassword}
						onChange={(event) =>
							setConfirmPassword(event.target.value)
						}></Form.Control>
				</Form.Group>

				<Button type='submit' variant='primary'>
					Sign Up
				</Button>
			</Form>

			<Row className='py-3'>
				<Col>
					Already a member? {'  '}
					<Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
						Sign In
					</Link>
				</Col>
			</Row>
		</FormContainer>
	);
}

export default RegistrationPage;
