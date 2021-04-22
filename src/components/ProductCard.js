import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../CSS/ProductCard.css'

function ProductCard({ product }) {
	return (
		<Card className='my-3 p-1'>
			<Link to={`/product/${product._id}`}>
				<Card.Img src={product.src} />
			</Link>

			<Link to={`/product/${product._id}`} className='no-underline'>
				<Card.Body>
					<Card.Title as='h4'>{product.name}</Card.Title>

					<Card.Text as='h5'>${product.price}</Card.Text>
				</Card.Body>
			</Link>
		</Card>
	);
}

export default ProductCard;
