import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Directors extends Component {

	constructor(props) {
		super(props);
		this.state = {
        };
	}

	render() {
	
		return (
			<React.Fragment>
				<h3>Board of Directors</h3>
				<img src="/assets/images/boardmembers2.jpg" alt="Board Members" height="300" />

				<Row>
					<Col><strong>Board Member Name</strong></Col>
					<Col><strong>Title</strong></Col>
					<Col><strong>Email Address</strong></Col>
				</Row>

				<Row>
					<Col>Vanessa Lum</Col>
					<Col>2020 President</Col>
					<Col>vlum@villagesofkapolei.com</Col>
				</Row>

				<Row>
					<Col>Nathan Napihaa</Col>
					<Col>2022 Vice President</Col>
					<Col>nnapihaa@villagesofkapolei.com</Col>
				</Row>

				<Row>
					<Col>David Luegen</Col>
					<Col>2022 Secretary</Col>
					<Col>dluengen@villagesofkapolei.com</Col>
				</Row>

				<Row>
					<Col>Carol Lagapa</Col>
					<Col>2021 Treasurer</Col>
					<Col>clagapa@villagesofkapolei.com</Col>
				</Row>

				<Row>
					<Col>Rudy Amasol</Col>
					<Col>2021 Director</Col>
					<Col>ramasol@villagesofkapolei.com</Col>
				</Row>
				<br />
			</React.Fragment>
		);
	}
}


export default Directors;
