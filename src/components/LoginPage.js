import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer'

function LoginPage({ history, location }) {
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    
    const dispatch = useDispatch()
    
	function submitHandler(event) {
        event.preventDefault();
		dispatch(login(email, password))
	}

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1 ] : '/'


    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [redirect, userInfo, history])
    
    
    return (
			<FormContainer>
				<h1 className='mt-4'>Sign In</h1>

				<Form onSubmit={submitHandler}>
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

					<Button type='submit' variant='primary'>
						Sign In
					</Button>
				</Form>

				<Row className='py-3'>
					<Col>
						Not a member? {'  '}
						<Link
							to={redirect ? `/register?redirect=${redirect}` : '/register'}>
							Sign Up
						</Link>
					</Col>
				</Row>
			</FormContainer>
		);
}

export default LoginPage;
