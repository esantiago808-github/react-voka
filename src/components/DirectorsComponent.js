import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import RenderDirectors from './RenderDirectorsComponent';
import { BOARD } from '../shared/hoaboard';

class Directors extends Component {

	constructor(props) {
		super(props);
		this.state = {
			director: BOARD
        };
	}

	render() {
	
		return (
			<React.Fragment>
				<h3>Board of Directors</h3>
				<img src="/assets/images/boardmembers2.jpg" alt="Board Members" height="300" className="pb-3"/>
				<Row className="align-text-center">
					<Col><strong>Board Member Name</strong></Col>
					<Col><strong>Title</strong></Col>
					<Col><strong>Email Address</strong></Col>
				</Row>

				<br />

				<Col>
					<RenderDirectors director={this.state.director} />
				</Col>

				<br />
			</React.Fragment>
		);
	}
}


export default Directors;
