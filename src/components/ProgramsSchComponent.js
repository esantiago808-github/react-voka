import React, { useState } from 'react';
import { Table, TabContent, Card, CardImg, CardText, CardBody,
    CardTitle, CardFooter, Button, Row, Col, Breadcrumb,BreadcrumbItem, Media  } from 'reactstrap';
import { Link } from 'react-router-dom';


function ProgramSchedule(props) {
    return (
        <React.Fragment>
            <Table hover>
                <thead>
                    <tr>
                    <th ></th>
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
                        <th scope="row" id="1"></th>
                            <td>
                                <Row>8:30 - 11:30 a.m.</Row>
                                <Row className="text-info">Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>8:30 - 11:30 a.m.</Row>
                                <Row className="text-info">Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>8:30 - 11:30 a.m.</Row>
                                <Row className="text-info">Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>8:30 - 11:30 a.m.</Row>
                                <Row className="text-info">Keiki Steps</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>9:00 am - 10:00 am</Row>
                                <Row className="text-info">Aqua Jogging</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>
                                <Row>8:00 - 9:00 a.m.</Row>
                                <Row className="text-info">Yoga Plain & Simple</Row>
                                <Row>Rec 1</Row>
                            </td>
                    </tr>
                    <tr>
                        <th scope="row" id="2"></th>
                            <td>                                
                                <Row>9:00 - 10:00 am</Row>
                                <Row className="text-info">Aqua Jogging</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>
                                <Row>5:00 - 5:50 p.m.</Row>
                                <Row className="text-info">Feel Good Stretch</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>9:00 - 10:00 am</Row>
                                <Row className="text-info">Aqua Jogging</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>
                                <Row>10:00 a.m.</Row>
                                <Row className="text-info">Seniors Club</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>4:00 - 5:30 p.m.</Row>
                                <Row className="text-info">Junior Swim Team</Row>
                                <Row>Pool</Row>
                            </td>
                            <td className="tdNoActivity"></td>
                    </tr>
                    <tr>
                        <th scope="row" id="3"></th>
                            <td>
                                <Row>4:00 p.m.</Row>
                                <Row className="text-info">Kickboxing Fitness</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row> 5:00 - 7:00 p.m.</Row>
                                <Row className="text-info">Taekwondo</Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td>
                                <Row>4:00 p.m.</Row>
                                <Row className="text-info">Kickboxing Fitness</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>5:00 - 5:50 p.m.</Row>
                                <Row className="text-info">Feel Good Stretch</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td className="tdNoActivity"></td>
                            <td className="tdNoActivity"></td>
                    </tr>
                    <tr>
                        <th scope="row" id="4"></th>
                            <td>
                                <Row>4:00 - 5:30 p.m.</Row>
                                <Row className="text-info">Swim Team</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>
                                <Row>5:30 pm</Row>
                                <Row className="text-info">Girl Scouts</Row>
                                <Row>Rec 1</Row>
                                <Row>2nd and 4th Tuesdays</Row>
                            </td>
                            <td>
                                <Row>4:00 p.m. - 5:30 p.m.</Row>
                                <Row className="text-info">Junior Swim Team</Row>
                                <Row>Pool</Row>
                            </td>
                            <td>
                                <Row>5:00 - 7:00 p.m.</Row>
                                <Row className="text-info">Taekwondo</Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td className="tdNoActivity"></td>
                            <td className="tdNoActivity"></td>
                    </tr>
                    <tr>
                        <th scope="row" id="5"></th>
                            <td>
                                <Row>5:30 - 6:30 pm  </Row>                      
                                <Row>KPOPK Cultural Hui</Row> 
                                <Row className="text-info">Keikis</Row>  
                                <Row>Rec 2  </Row> 
                            </td>
                            <td>
                                <Row>6:30 - 7:30 pm</Row>
                                <Row className="text-info">Karate - Beginners</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>5:00 - 6:30 pm</Row>
                                <Row className="text-info">KPOPK Cultural Hui</Row>
                                <Row className="text-info">Keikis</Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td>
                                <Row>6:30 - 7:30 pm</Row>
                                <Row className="text-info">Karate - Beginners</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td className="tdNoActivity"></td>
                            <td className="tdNoActivity"></td>
                    </tr>
                    <tr>
                        <th scope="row" id="6"></th>
                            <td>
                                <Row>7:00 - 8:30 pm</Row>
                                <Row className="text-info">KPOPK Cultural Hui</Row>
                                <Row className="text-info">Adults</Row> 
                                <Row>Rec 2</Row> 
                            </td>
                            <td>
                                <Row>7:00 - 8:30 pm</Row>
                                <Row className="text-info">Karate - Advanced</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>7:00 - 8:30 pm</Row>
                                <Row className="text-info">KPOPK Cultural Hui</Row> 
                                <Row className="text-info">Adults</Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td>
                                <Row>7:00 - 8:30 pm</Row>
                                <Row className="text-info">Karate - Advanced</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td className="tdNoActivity"></td>
                            <td className="tdNoActivity"></td>
                    </tr>
                    <tr>
                        <th scope="row" id="7"></th>
                            <td>
                                <Row>7:00 - 8:30 p.m.</Row>
                                <Row className="text-info">Zumba & Pound</Row>
                                <Row className="text-info">Fitness Classes</Row>
                                <Row>Rec 1</Row>
                            </td>
                            <td>
                                <Row>7:30 - 8:30 p.m.</Row>
                                <Row className="text-info">Hip Hop</Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td>
                                <Row>7:00 - 8:30 p.m.</Row>
                                <Row className="text-info">Zumba & Pound</Row>
                                <Row className="text-info"> Fitness Classes</Row>
                                <Row>Rec 1</Row>
                                <Row>Most Wednesdays</Row>
                            </td>
                            <td className="tdNoActivity"></td>
                            <td className="tdNoActivity"></td>
                            <td className="tdNoActivity"></td>
                    </tr>
                    <tr>
                        <th scope="row" id="8"></th>
                            <td>
                                <Row>8:00 - 9:00 p.m.</Row>
                                <Row className="text-info">Orbix Fitness </Row>
                                <Row>Rec 2</Row>
                            </td>
                            <td className="tdNoActivity"></td>
                            <td className="tdNoActivity"></td>
                            <td className="tdNoActivity"></td>
                            <td className="tdNoActivity"></td>
                            <td className="tdNoActivity"></td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
    );
}

export default ProgramSchedule;