import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, Button, ListGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../CSS/ProductPage.css';
import axios from 'axios';
import { listProductInfo } from '../actions/productActions';
import Loader from './Loader';

function ProductPage({ match, history }) {
	const [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();
	const productInfo = useSelector((state) => state.productInfo);
	// get relevant data from productInfo object
	const { product, loading, error } = productInfo;

	// triggers the action and allows state in redux to update
	useEffect(() => {
		dispatch(listProductInfo(match.params.id));
	}, [dispatch, match]);

	function bagHandler(){
		history.push(`/bag/${match.params.id}?quantity=${quantity}`)
	}

	if (loading) {
		return <Loader />;
	}
	if (error) {
		return <h2>{error}</h2>;
	}
	return (
		<div>
			<Row>
				<Col md={5.5}>
					<Image
						className='product-image'
						src={product.image}
						alt={product.name}
					/>
				</Col>

				<Col md={5}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h4>{product.name}</h4>
							<h5>${product.price}</h5>
						</ListGroup.Item>

						<ListGroup.Item>
							<h4>Product Details:</h4>

							{/* {product.details.map((info) => (
								<Col className='mb-1'>{info}</Col>
							))} */}
						</ListGroup.Item>

						<ListGroup.Item>
							<h4>Size: </h4>
							{/* map available sizes */}
						</ListGroup.Item>

						<ListGroup.Item>
							<h5>
								Currently {product.inStock > 0 ? 'In Stock' : 'Out of Stock'}
							</h5>

							<Col xs='auto' className='mt-3' >
								<h6>Quantity:</h6>
								<Form.Control
									as='select'
									value={quantity}
									onChange={(event) => setQuantity(event.target.value)}>
									{[...Array(product.inStock).keys()].map((num) => (
										<option
											key={num + 1}
											value={num + 1}>
											{num + 1}
										</option>
									))}
								</Form.Control>
							</Col>
						</ListGroup.Item>

						<ListGroup.Item className='bag-btn'>
							<Button disabled={product.inStock < 1} className='mt-3 btn-block'
							onClick={bagHandler}
							>
								Add
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
}

export default ProductPage;
