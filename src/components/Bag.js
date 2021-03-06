import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button } from 'react-bootstrap';
import { addToBag, removeFromBag } from '../actions/bagActions';

function Bag({ match, location, history }) {
	const productId = match.params.id;
	// if the quantity exist, extract just the number from the attribute
	const quantity = location.search ? location.search.split('=')[1] : 1;

	const dispatch = useDispatch();

	const bag = useSelector((state) => state.bag);
	const { bagItems } = bag;

	// trigger action to update state/local storage
	useEffect(() => {
		if (productId) {
			dispatch(addToBag(productId, quantity));
		}
	}, [dispatch, productId, quantity]);

	function removeFromBagHandler(id) {
		dispatch(removeFromBag(id));
	}

	function checkoutHandler() {
		history.push('/login?redirect=shipping');
	}

	return (
		<div>
			<Row className='ml-2 mt-4'>
				<h1>Shopping Bag</h1>
			</Row>

			<Row className='ml-5 mt-3'>
				{bagItems.length === 0 ? (
					<h2>
						Your bag is empty...{' '}
						<Link to='/' style={{ color: '#92CEF6' }}>
							Continue Shopping?
						</Link>
					</h2>
				) : (
					<ListGroup>
						{bagItems.map((item) => (
							<ListGroup.Item key={item.product}>
								<Row>
									{/* image col */}
									<Col sm={3} md={2}>
										<Image src={item.image} alt={item.name} fluid />
									</Col>

									<Col sm={3} md={7} className='mt-3'>
										<Link to={`/product/${item.product}`}>
											<h3>{item.name}</h3>
										</Link>

										<h4 className='ml-4 mt-3'>${item.price}</h4>

										<Row className='ml-4 mt-2' sm={2} md={4}>
											<Form.Control
												as='select'
												value={item.quantity}
												onChange={(event) =>
													dispatch(
														addToBag(item.product, Number(event.target.value))
													)
												}>
												{[...Array(item.inStock).keys()].map((num) => (
													<option key={num + 1} value={num + 1}>
														{num + 1}
													</option>
												))}
											</Form.Control>

											<Button
												className='ml-1'
												type='button'
												variant='light'
												style={{ height: '45px' }}
												onClick={() => removeFromBagHandler(item.product)}>
												<i className='fas fa-trash-alt'></i>
											</Button>
										</Row>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Row>

			<ListGroup variant='flush'>
				<Row>
					<Col>
						<ListGroup.Item
							className='pt-4 pb-3'
							style={{ background: 'rgb(40,40,40)', color: 'white' }}>
							<h2>
								Sub-total: $
								{bagItems
									.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
									.toFixed(2)}
							</h2>
						</ListGroup.Item>
					</Col>

					<Button
						disabled={bagItems.length === 0}
						variant='light'
						className='mt-3'
						style={{ width: '20em', position: 'absolute', right: '5em' }}
						onClick={checkoutHandler}>
						Continue to Shipping
					</Button>
				</Row>
			</ListGroup>
		</div>
	);
}

export default Bag;
