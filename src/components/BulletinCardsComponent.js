import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardSubtitle } from 'reactstrap';

class Bulletin extends Component {

  constructor(props) {
    super(props);
    this.state = { };
}

  render() {

    const bulletinCard = this.props.bulletin.map(b => {
      return (
         <div key={b.id} className="col-md-5 m-1">
            <Card>
              <CardHeader className={b.warning}>{b.title}</CardHeader>
                <CardBody>
                  <CardSubtitle><em>{b.posted}</em></CardSubtitle>
                  <br/>
                  <CardText>{b.content}</CardText>
              </CardBody>
            </Card>
        </div>
      );
    });

  return (
      <div className="container">
          <div className="row">
              {bulletinCard}
          </div>
      </div>
    );
  }

}

export default Bulletin;

