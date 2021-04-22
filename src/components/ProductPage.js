import React from 'react';
import { Row, Col, Image, Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../resources/products';

function ProductPage({ match }) {
	const product = products.find((product) => product._id === match.params.id);

	return (
		<div>
			<Row>
				<Col md={7}>
					<Image src={product.src} alt={product.name} />
				</Col>

				<Col md={5}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h4>{product.name}</h4>
							<h5>${product.price}.00</h5>
						</ListGroup.Item>
					</ListGroup>

					<ListGroup>
						<ListGroup.Item>
							<h4 className='mb-2'>Product Details:</h4>
							{product.details.map((info) => (
								<Col className='mb-1'>{info}</Col>
							))}
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
		</div>
	);
}

export default ProductPage;
