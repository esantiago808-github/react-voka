import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

class Directors extends Component {
	render () {
		return (
			<React.Fragment>
				<h4>2020 Board of Directors</h4>
				<DirectorList board={this.props.board} />

				<ul className="list-unstyled">
					<li>
					Vanessa Lum, President, vlum@villagesofkapolei.com
					</li>
					<li>
					Nathan Napihaa, Vice President, nnapihaa@villagesofkapolei.com
					</li>
				</ul>

			</React.Fragment>
		);
	}
}

class RenderDirectors extends Component {
	render () {
		return (
			<p>
				{this.props.board.contactname}, {this.props.board.title}, {this.props.board.email}
			</p>
		)
	}
}

function DirectorList({board}) {
	if(board)
		return (
			<React.Fragment>
				<ul>
					{this.props.board.map((board) =>
					<li key={board.id}>
						<RenderDirectors board={board} />
					</li>
					)}
				</ul>
			</React.Fragment>
		)
	return <div />
}


export default Directors;
