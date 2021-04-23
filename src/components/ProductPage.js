import React, { useState, useEffect } from 'react';
import { Row, Col, Image, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../CSS/ProductPage.css';
import axios from 'axios';

function ProductPage({ match }) {
	const [product, setProduct] = useState(null);

	useEffect(() => {
		async function fetchProduct() {
			const { data } = await axios.get(`/products/${match.params.id}`);
			setProduct(data);
		}

		fetchProduct();
	}, []);

	if (!product) {
		return <h2>loading...</h2>;
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
							<h5>${product.price}.00</h5>
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
							<Button className='mt-2 btn-block'>Add</Button>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
}

export default ProductPage;
