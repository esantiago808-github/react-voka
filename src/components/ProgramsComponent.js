import React from 'react';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';


function Programs(props) {
    return (
        <React.Fragment>
            <Row>
                <Col sm="2" className="pb-3">
                    <CardImg top width="100%" src="/assets/images/yoga.jpg" alt="Yoga image" />
                    <Card body id="cardBodyProgram">
                        <CardTitle>Saturday/Sunday</CardTitle>
                        <CardText>
                            <Row>
                                <strong>Saturday</strong>
                            </Row>
                            <Row>
                                <Col>
                                    <strong>8:00 - 9:00 a.m.</strong>                                
                                </Col>
                                <Col>
                                    Yoga Plain & Simple                    
                                </Col>
                                <Col>
                                    Rec 1
                                </Col>
                            </Row>
                            <Row>
                                <strong>Sunday</strong>
                                <p>No scheduled activities</p>
                            </Row>
                        </CardText>
                    </Card>
                </Col>
                <Col sm="2" className="pb-3">
                    <CardImg top width="100%" src="/assets/images/yoga.jpg" alt="Yoga image" />
                    <Card body id="cardBodyProgram">
                        <CardTitle>Monday</CardTitle>
                        <CardText>
                            <Row>
                                <strong>8:30 - 11:30 a.m</strong>
                                Keiki Steps<br/>
                                Rec 1
                            </Row>
                        </CardText>
                    </Card>
                </Col>
                <Col sm="2" className="pb-3">
                    <CardImg top width="100%" src="/assets/images/yoga.jpg" alt="Yoga image" />
                    <Card body id="cardBodyProgram">
                        <CardTitle>Tuesday</CardTitle>
                        <CardText>
                        8:30 - 11:30 a.m.
                        </CardText>
                    </Card>
                </Col>
                <Col sm="2" className="pb-3">
                    <CardImg top width="100%" src="/assets/images/yoga.jpg" alt="Yoga image" />
                    <Card body id="cardBodyProgram">
                        <CardTitle>Wednesday</CardTitle>
                        <CardText>
                        8:30 - 11:30 a.m.
                        </CardText>
                    </Card>
                </Col>
                <Col sm="2" className="pb-3">
                    <CardImg top width="100%" src="/assets/images/yoga.jpg" alt="Yoga image" />
                    <Card body id="cardBodyProgram">                        
                        <CardTitle>Thursday</CardTitle>
                        <CardText>
                        8:30 - 11:30 a.m.
                        </CardText>
                    </Card>
                </Col>
                <Col sm="2" className="pb-3">
                    <CardImg top width="100%" src="/assets/images/yoga.jpg" alt="Yoga image" />
                    <Card body id="cardBodyProgram">
                        <CardTitle>Friday</CardTitle>
                        <CardText>
                        9:00 am - 10:00 am
                        Aqua Jogging
                        Pool
                        4:00 - 5:30 p.m.
                        </CardText>
                    </Card>
                </Col>
          </Row>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                            <td>No Scheduled Activity</td>
                            <td>
                                <Row>8:30 - 11:30 a.m. </Row>
                                <Row>Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>8:30 - 11:30 a.m. </Row>
                                <Row>Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>8:30 - 11:30 a.m. </Row>
                                <Row>Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>8:30 - 11:30 a.m. </Row>
                                <Row>Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>Friday Activity</td>
                            <td>Saturday Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                            <td>No Scheduled Activity</td>
                            <td>                                
                                <Row>9:00 - 10:00 am</Row>
                                <Row>Aqua Jogging</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>Tuesday Activity</td>
                            <td>Wednesday Activity</td>
                            <td>Thursday Activity</td>
                            <td>Friday Activity</td>
                            <td>Saturday Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                            <td>No Scheduled Activity</td>
                            <td>4:00 p.m.
Kickboxing Fitness
Rec 1</td>
                            <td>Tuesday Activity</td>
                            <td>Wednesday Activity</td>
                            <td>Thursday Activity</td>
                            <td>Friday Activity</td>
                            <td>Saturday Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                            <td>No Scheduled Activity</td>
                            <td>4:00 - 5:30 p.m.
Swim Team
Pool</td>
                            <td>Tuesday Activity</td>
                            <td>Wednesday Activity</td>
                            <td>Thursday Activity</td>
                            <td>Friday Activity</td>
                            <td>Saturday Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                            <td>No Scheduled Activity</td>
                            <td>
                                <Row>5:30 - 6:30 pm  </Row>                      
                                <Row>KPOPK Cultural Hui - Keikis</Row>  
                                <Row>Rec 2  </Row> 
                            </td>
                            <td>Tuesday Activity</td>
                            <td>Wednesday Activity</td>
                            <td>Thursday Activity</td>
                            <td>Friday Activity</td>
                            <td>Saturday Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                            <td>No Scheduled Activity</td>
                            <td>
                                <Row>7:00 - 8:30 pm  </Row>                      
                                <Row>KPOPK Cultural Hui - Adults</Row>  
                                <Row>Rec 2  </Row> 
                            </td>
                            <td>Tuesday Activity</td>
                            <td>Wednesday Activity</td>
                            <td>Thursday Activity</td>
                            <td>Friday Activity</td>
                            <td>Saturday Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                            <td>No Scheduled Activity</td>
                            <td>7:00 - 8:30 p.m.
Zumba & Pound Fitness Classes
Rec 1</td>
                            <td>Tuesday Activity</td>
                            <td>Wednesday Activity</td>
                            <td>Thursday Activity</td>
                            <td>Friday Activity</td>
                            <td>Saturday Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                            <td>No Scheduled Activity</td>
                            <td>8:00 - 9:00 p.m.
Orbix Fitness
Rec 2
Tahitian style fitness class</td>
                            <td>Tuesday Activity</td>
                            <td>Wednesday Activity</td>
                            <td>Thursday Activity</td>
                            <td>Friday Activity</td>
                            <td>Saturday Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                            <td>No Scheduled Activity</td>
                            <td>Monday Activity</td>
                            <td>Tuesday Activity</td>
                            <td>Wednesday Activity</td>
                            <td>Thursday Activity</td>
                            <td>Friday Activity</td>
                            <td>Saturday Activity</td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
    );
}

export default Programs;