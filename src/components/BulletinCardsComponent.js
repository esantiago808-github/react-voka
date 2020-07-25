import React, { Component } from 'react';
import { Card, CardHeader, CardText, CardBody, CardSubtitle, Row, Col } from 'reactstrap';

class Bulletin extends Component {
  render() {
    return (
      <div>
        <Row >
          <Col className="sm-6 pb-3">
            <Card>
              <CardHeader className="card-header text-white"><h5><strong>Bulk Trash Services</strong></h5></CardHeader>
              <CardBody className="card-body">
                <CardSubtitle><em>Posted June 2, 2020</em></CardSubtitle>
                <br />
                <CardText>The City and County of Honolulu has changed it’s Bulky Item Collection Service. </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col className="pb-3">
            <Card>
              <CardHeader className="card-header"><h5><strong>Pool Lap Swim Hours</strong></h5></CardHeader>
              <CardBody className="card-body">
                <CardSubtitle><em>Posted June 2, 2020</em></CardSubtitle>
                <br />
                <CardText>
                  <p>The pool will be opening for lap swim only, (no free swim or socializing) from 6:00 am - 8:00 am and 11:00 am - 5:00 pm. Swim test may be required.
                  </p>
                  <p>Please be patient as we work through this time and wear your mask/maintain social distancing. </p>
                  <p>
                    Any questions please call the office 674-4444 dept. 2 from 9:00 am - 5:00 pm, Monday through Friday.
                  </p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row >
          <Col className="sm-6 pb-3">
            <Card>
              <CardHeader className="card-header text-white bg-warning"><h5><strong>VOKA Corona Virus Updates</strong></h5></CardHeader>
              <CardBody className="card-body">
                <CardSubtitle><em>Posted March 16, 2020</em></CardSubtitle>
                <br />
                <CardText>
                  <p>The Pool, Iwilani & A’eloa Play Ground Structures, and Kekuilani Gazebo are closed and all VOKA sponsored activities and programs are suspended until further notice due to Corona Virus concerns. We appreciate your understanding.</p>

                  <p>Our Offices are open for payments. We would like for you to utilize the TOPs One system. If you need assistance to set up your account please call our office and we will be happy to update your email and send you a link. Please call us at 808.674.4444</p>

                  <p>The Recreation Office is open currently as well to answer questions for Hall Rentals.</p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col className="pb-3">
            <Card>
              <CardHeader className="card-header"><h5><strong>Wet n’Wild Water Park Tickets</strong></h5></CardHeader>
              <CardBody className="card-body">
                <CardSubtitle><em>Posted May 29, 2020</em></CardSubtitle>
                <br />
                <CardText>
                  <p>Wet n’Wild Hawaii discount tickets are available at the Association office.</p>

                  <p>General admission tickets (ages 3 and up) are $30.00.</p>

                  <p>Season Pass - 2020 is $45 per person.</p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  };
}

export default Bulletin;

