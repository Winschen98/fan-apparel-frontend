import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Loader from './Loader';

function Home() {
	// use filter to store newly released items as an array variable

	const dispatch = useDispatch();
	//select productList from state to display
	const productList = useSelector((state) => state.productList);
	const { products, loading, error } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);
	

	
	
	if (loading) {
		return <Loader />;
	}
    if (error){
		return <h2>{error}</h2>
    }

	// filter for desired products
	const newReleases = products.filter(item => item.newRelease)

	return (
		<div>
			<h1>New Arrivals</h1>
			<Row>
				{newReleases.map((product) => (
					<Col key={product._id} sm={6} md={6} lg={4} xl={3}>
						<ProductCard product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
}

export default Home;
