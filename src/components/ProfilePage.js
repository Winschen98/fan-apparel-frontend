import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { getUserProfile, updateUserProfile } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

function ProfilePage({history}) {
    	const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [message, setMessage] = useState('');

        const dispatch = useDispatch();


        function updateProfileHandler(event) {
            event.preventDefault();

            if (password !== confirmPassword) {
                setMessage('Passwords do not match');
            } else {
                dispatch(updateUserProfile({
                    'id': user._id, 
                    'name': name, 
                    'email': email, 
                    'password': password
                }))

                // display success message if updated 
                setMessage(<h6 style={{color: 'green'}}>Profile Successfully Updated</h6>);
            }
        }

        const userProfile = useSelector((state) => state.userProfile);
        const { error, loading, user } = userProfile;

        const userLogin = useSelector((state) => state.userLogin);
        const { userCredentials } = userLogin;
        
        const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
        const { success } = userUpdateProfile;

        useEffect(() => {
            // Dont allow access to page without user Credentials
            if (!userCredentials) {
                history.push('/login');
            } else {
                // if success then reset the profile info first
                if (!user || !user.name || success){
                    dispatch({type: USER_UPDATE_PROFILE_RESET})
                    dispatch(getUserProfile('profile'))
                } else {
                    setName(user.name)
                    setEmail(user.email)
                }
            }
        }, [dispatch, history, userCredentials, user, success]);



        if (loading) {
            return <Loader />;
        }
	return (
		<Row>
			<Col md={3} className='ml-5'>
				<h1>Profile</h1>
				{message && <h6 style={{ color: 'red' }}>{message}</h6>}

				<Form onSubmit={updateProfileHandler}>
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
							type='password'
							placeholder='Re-Enter Password'
							value={confirmPassword}
							onChange={(event) =>
								setConfirmPassword(event.target.value)
							}></Form.Control>
					</Form.Group>

					<Button type='submit' variant='primary'>
						Update
					</Button>
				</Form>
			</Col>

			<Col md={8}>
				<h1>Orders</h1>
			</Col>
		</Row>
	);
}

export default ProfilePage;
