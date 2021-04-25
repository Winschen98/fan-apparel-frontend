import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../CSS/Header.css'

import logo from '../resources/images/fan-logo.gif';

function Header() {
	return (
		<header>
			<Navbar bg='light' expand='lg'>
				{/* <Container> */}
					<LinkContainer to='/' className='logo'>
						<img
							src={logo}
							width='50'
							height='50'
							className='d-inline-block align-top'
							alt='Fan logo'
						/>
					</LinkContainer>

					<LinkContainer to='/'>
						<Navbar.Brand>Fan-Apparel</Navbar.Brand>
					</LinkContainer>

					<Navbar.Toggle aria-controls='basic-navbar-nav' />

					<Navbar.Collapse id='basic-navbar-nav'>
						<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Separated link
							</NavDropdown.Item>
						</NavDropdown>

						<Nav className='mr-auto'>
							<LinkContainer to='/bag'>
								<Nav.Link>
									<i className='fas fa-shopping-bag'></i>
								</Nav.Link>
							</LinkContainer>

							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user'></i>
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				{/* </Container> */}
			</Navbar>
		</header>
	);
}

export default Header;
