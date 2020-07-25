import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Directors extends Component {
	render () {
		return (
			<React.Fragment>
				<h4>2020 Board of Directors</h4>
				<img src="/assets/images/boardmembers2.jpg" alt="Board of Directors" height="300" />

				<Row>
					<Col>
						2020 President
					</Col>
					<Col>
						Vanessa Lum
					</Col>
					<Col>
						vlum@villagesofkapolei.com
					</Col>
				</Row>
				<Row>
					<Col>
						2022 Vice President
					</Col>
					<Col>
						Nathan Napihaa
					</Col>
					<Col>
						nnapihaa@villagesofkapolei.com
					</Col>
				</Row>
				<Row>
					<Col>
					2022 Secretary
					</Col>
					<Col>
						David Luegen
					</Col>
					<Col>
						dluengen@villagesofkapolei.com
					</Col>
				</Row>
				<Row>
					<Col>
						2021 Treasurer
					</Col>
					<Col>
						Carol Lagapa
					</Col>
					<Col>
						clagapa@villagesofkapolei.com
					</Col>
				</Row>
				<Row>
					<Col>
						2021 Director
					</Col>
					<Col>
						Rudy Amasol
					</Col>
					<Col>
						ramasol@villagesofkapolei.com
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}


export default Directors;
