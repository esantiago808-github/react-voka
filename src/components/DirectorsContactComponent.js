import React from 'react';
import { Row, Col, Container } from 'reactstrap';


function RenderDirectors({ board }) {
    if (board)
		return (
			<React.Fragment>
				<h4>2020 Board of Directors</h4>
					{board.map((b) => {
						return (
							<Container>
								<Row>
									<Col>
										<strong>Position</strong>
									</Col>
									<Col>
										<strong>Board Member Name</strong>
									</Col>
									<Col>
										<strong>E-mail Address</strong>
									</Col>
								</Row>				
								<Row>
									<Col>
										{b.contactname}
									</Col>
									<Col>
										{b.title}
									</Col>
									<Col>
										{b.email}
									</Col>
								</Row>
							</Container>
						);
					})}
			</React.Fragment>
		);
	return <div />;
}

function Directors(props) {
    return (
        <React.Fragment>
			<RenderDirectors board={props.board} />

			<h4>2020 Board of Directors</h4>
			<Row>
				<Col>
					<strong>Position</strong>
				</Col>
				<Col>
					<strong>Board Member Name</strong>
				</Col>
				<Col>
					<strong>E-mail Address</strong>
				</Col>
			</Row>

			<Row>
				<Col>
					President
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
					Vice President
				</Col>
				<Col>
					Nathan Napihaa
				</Col>
				<Col>
					nnapihaa@villagesofkapolei.com
				</Col>
			</Row>

		</React.Fragment>
    );
}

export default Directors;
