import React from 'react';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';


function Programs(props) {
    return (
        <React.Fragment>
            <h5>No scheduled program events on Sundays</h5>
            <h5 className="text-danger"><strong>All Recreational Program Cancelled Due COVID-19 Until Further Notice</strong></h5>
            <Table>
                <thead>
                    <tr>
                    <th >#</th>
                    <th id="thProgram">Monday</th>
                    <th >Tuesday</th>
                    <th >Wednesday</th>
                    <th >Thursday</th>
                    <th id="thProgram">Friday</th>
                    <th id="thProgram">Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                            <td>
                                <Row>8:30 - 11:30 a.m.</Row>
                                <Row>Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>8:30 - 11:30 a.m.</Row>
                                <Row>Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>8:30 - 11:30 a.m.</Row>
                                <Row>Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>8:30 - 11:30 a.m.</Row>
                                <Row>Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>9:00 am - 10:00 am</Row>
                                <Row>Aqua Jogging</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>
                                <Row>8:00 - 9:00 a.m.</Row>
                                <Row>Yoga Plain & Simple</Row>
                                <Row>Rec 1</Row>
                            </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                            <td>                                
                                <Row>9:00 - 10:00 am</Row>
                                <Row>Aqua Jogging</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>
                                <Row>5:00 - 5:50 p.m.</Row>
                                <Row>Feel Good Stretch</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>9:00 - 10:00 am</Row>
                                <Row>Aqua Jogging</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>
                                <Row>10:00 a.m.</Row>
                                <Row>Seniors Club</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>4:00 - 5:30 p.m.</Row>
                                <Row>Junior Swim Team</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>No Scheduled Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                            <td>
                                <Row>4:00 p.m.</Row>
                                <Row>Kickboxing Fitness</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row> 5:00 - 7:00 p.m.</Row>
                                <Row>Taekwondo</Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td>
                                <Row>4:00 p.m.</Row>
                                <Row>Kickboxing Fitness</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>5:00 - 5:50 p.m.</Row>
                                <Row>Feel Good Stretch</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>No Scheduled Activity</td>
                            <td>No Scheduled Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                            <td>
                                <Row>4:00 - 5:30 p.m.</Row>
                                <Row>Swim Team</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>
                                <Row>5:30 pm</Row>
                                <Row>Girl Scouts</Row>
                                <Row>Rec 1</Row>
                                <Row>2nd and 4th Tuesdays</Row>
                            </td>
                            <td>
                                <Row>4:00 p.m. - 5:30 p.m.</Row>
                                <Row>Junior Swim Team</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>
                                <Row>5:00 - 7:00 p.m.</Row>
                                <Row>Taekwondo</Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td>No Scheduled Activity</td>
                            <td>No Scheduled Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                            <td>
                                <Row>5:30 - 6:30 pm  </Row>                      
                                <Row>KPOPK Cultural Hui</Row> 
                                <Row>Keikis</Row>  
                                <Row>Rec 2  </Row> 
                            </td>
                            <td>
                                <Row>6:30 - 7:30 pm</Row>
                                <Row>Karate - Beginners</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>5:00 - 6:30 pm</Row>
                                <Row>KPOPK Cultural Hui</Row>
                                <Row>Keikis</Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td>
                                <Row>6:30 - 7:30 pm</Row>
                                <Row>Karate - Beginners</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>No Scheduled Activity</td>
                            <td>No Scheduled Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                            <td>
                                <Row>7:00 - 8:30 pm</Row>
                                <Row>KPOPK Cultural Hui</Row>
                                <Row>Adults</Row> 
                                <Row>Rec 2</Row> 
                            </td>
                            <td>
                                <Row>7:00 - 8:30 pm</Row>
                                <Row>Karate - Advanced</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>7:00 - 8:30 pm</Row>
                                <Row>KPOPK Cultural Hui</Row> 
                                <Row>Adults</Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td>
                                <Row>7:00 - 8:30 pm</Row>
                                <Row>Karate - Advanced</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>No Scheduled Activity</td>
                            <td>No Scheduled Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                            <td>
                                <Row>7:00 - 8:30 p.m.</Row>
                                <Row>Zumba & Pound</Row>
                                <Row>Fitness Classes</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>7:30 - 8:30 p.m.</Row>
                                <Row>Hip Hop</Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td>
                                <Row>7:00 - 8:30 p.m.</Row>
                                <Row>Zumba & Pound</Row>
                                <Row> Fitness Classes</Row>
                                <Row>Rec 1</Row>
                                <Row>Most Wednesdays</Row>
                            </td>
                            <td>No Scheduled Activity</td>
                            <td>No Scheduled Activity</td>
                            <td>No Scheduled Activity</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                            <td>
                                <Row>8:00 - 9:00 p.m.</Row>
                                <Row>Orbix Fitness </Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td>No Scheduled Activity</td>
                            <td>No Scheduled Activity</td>
                            <td>No Scheduled Activity</td>
                            <td>No Scheduled Activity</td>
                            <td>No Scheduled Activity</td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
    );
}

export default Programs;