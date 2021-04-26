import React from 'react'

import { Container, Col, Row } from 'react-bootstrap'

function Footer() {
    return (
			<footer classname='footer'>
				<Container>
					<Row>
						<Col className='text-center'>
							&copy; All imagery, product catalogs, media, trademarks, etc. are copyright
							their respective owners. All rights reserved.
						</Col>
					</Row>
				</Container>
			</footer>
		);
}

export default Footer
