import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
	return (
		<Spinner
			animation='grow'
			role='status'
			style={{
				margin: 'auto',
				height: '200px',
				width: '200px',
				display: 'block',
			}}>
			<span className='sr-only'>Loading...</span>
		</Spinner>
	);
}

export default Loader;
