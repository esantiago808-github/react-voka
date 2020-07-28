import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class RenderDirectors extends Component {

  constructor(props) {
    super(props);
    this.state = { };
}

  render() {

    const directorCard = this.props.director.map(d => {
      return (
        <Row key={d.id}>
          <Col>{d.contactname}</Col>
          <Col>{d.title}</Col>
          <Col>{d.email}</Col>
        </Row>
      );
    });


  return (
      <div className="container">
        {directorCard}
      </div>
    );
  }
}

export default RenderDirectors;
