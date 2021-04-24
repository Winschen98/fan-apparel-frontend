import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../CSS/ProductPage.css';
import axios from 'axios';
import { listProductInfo } from '../actions/productActions'
import Loader from './Loader';

function ProductPage({ match }) {
	const dispatch = useDispatch()
	const productInfo = useSelector(state => state.productInfo)
	// get relevant data from productInfo object
	const { product, loading, error } = productInfo

	// triggers the action and allows state in redux to update
	useEffect(() => {
		dispatch(listProductInfo(match.params.id))

	}, [dispatch, match]);



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
							<h4 className='mb-2'>Product Details:</h4>


							{/* {product.details.map((info) => (
								<Col className='mb-1'>{info}</Col>
							))} */}

							
						</ListGroup.Item>

						<ListGroup.Item>
							<h4>Size: </h4>
							{/* map available sizes */}
						</ListGroup.Item>

						

						<ListGroup.Item className='checkout-card'>
							<h5>Currently {product.inStock ? 'In Stock' : 'Out of Stock'}</h5>
							<Button 
							disabled={product.inStock === false}
							className='mt-3 btn-block'>Add</Button>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
}

export default ProductPage;
