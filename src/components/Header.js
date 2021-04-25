import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../CSS/Header.css';

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
					{/* male dropdown menu */}
					<NavDropdown title='Men' id='basic-nav-dropdown'>
						<NavDropdown.Item>
							<LinkContainer to='/m-shirts'>
								<Nav.Link>Shirts</Nav.Link>
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
							<Nav.Link>On Sale</Nav.Link>
						</NavDropdown.Item>
					</NavDropdown>

					{/* female dropdown menu */}
					<NavDropdown title='WOMEN' id='basic-nav-dropdown'>
						<NavDropdown.Item>
							<LinkContainer to='/f-shirts'>
								<Nav.Link>Shirts</Nav.Link>
							</LinkContainer>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<LinkContainer to='/f-pants'>
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
							<Nav.Link>On Sale</Nav.Link>
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
