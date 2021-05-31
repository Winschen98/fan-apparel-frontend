import '../CSS/Header.css';
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import {logout} from '../actions/userActions'


// import { login } from '../actions/userActions'

import logo from '../resources/images/fan-logo.gif';

function Header() {
	const userLogin = useSelector((state) => state.userLogin);
	const { userCredentials } = userLogin;

	const dispatch = useDispatch() 
	
	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<header>
			<Navbar bg='light' expand='lg'>
				<LinkContainer to='/' className='logo'>
					<img
						src={logo}
						width='50'
						height='50'
						className='d-inline-block align-top ml-3 mr-4'
						alt='Fan logo'
					/>
				</LinkContainer>

				<LinkContainer to='/'>
					<Navbar.Brand className='app-name mr-5'>Fan Apparel</Navbar.Brand>
				</LinkContainer>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />

				<Navbar.Collapse id='basic-navbar-nav'>
					{/* male dropdown menu */}
					<NavDropdown title='Men' id='basic-nav-dropdown'>
						<NavDropdown.Item>
							<LinkContainer to='/m-shirts'>
								<Nav.Link>Shirts</Nav.Link>
							</LinkContainer>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<LinkContainer to='/m-jackets'>
								<Nav.Link>Jackets</Nav.Link>
							</LinkContainer>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<LinkContainer to='/m-hoodies'>
								<Nav.Link>Sweat Shirts & Hoodies</Nav.Link>
							</LinkContainer>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<LinkContainer to='/m-pants'>
								<Nav.Link>Pants</Nav.Link>
							</LinkContainer>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<LinkContainer to='/m-shoes'>
								<Nav.Link>Shoes</Nav.Link>
							</LinkContainer>
						</NavDropdown.Item>

						<NavDropdown.Divider />
						<NavDropdown.Item>
							<Nav.Link style={{ color: 'red' }}>Sale</Nav.Link>
						</NavDropdown.Item>
					</NavDropdown>

					{/* female dropdown menu */}
					<NavDropdown title='WOMEN' id='basic-nav-dropdown'>
						<NavDropdown.Item>
							<LinkContainer to='/m-shirts'>
								<Nav.Link>Shirts</Nav.Link>
							</LinkContainer>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<LinkContainer to='/f-bags'>
								<Nav.Link>Bags</Nav.Link>
							</LinkContainer>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<LinkContainer to='/f-jackets'>
								<Nav.Link>Jackets</Nav.Link>
							</LinkContainer>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<LinkContainer to='/m-pants'>
								<Nav.Link>Pants</Nav.Link>
							</LinkContainer>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<LinkContainer to='/f-shoes'>
								<Nav.Link>Shoes</Nav.Link>
							</LinkContainer>
						</NavDropdown.Item>

						<NavDropdown.Divider />
						<NavDropdown.Item>
							<Nav.Link style={{ color: 'red' }}> Sale</Nav.Link>
						</NavDropdown.Item>
					</NavDropdown>

					<Nav className='mr-auto'>
						<LinkContainer to='/bag'>
							<Nav.Link>
								<i className='fas fa-shopping-bag'></i>
							</Nav.Link>
						</LinkContainer>

						{userCredentials ? (
							<NavDropdown title={`Welcome, ${userCredentials.name}`} id='username'>
								<LinkContainer to='/profile'>
									<NavDropdown.Item>Profile</NavDropdown.Item>
								</LinkContainer>

									<NavDropdown.Item onClick={logoutHandler}>
										Logout
									</NavDropdown.Item>
							</NavDropdown>
						) : (
							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user'></i>
								</Nav.Link>
							</LinkContainer>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
}

export default Header;
