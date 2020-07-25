import React from 'react';
import { Col, Row, Table } from 'reactstrap';
import MakaiRoomCarousel from './MakaiRoomCarouselComponent';
import MaukaRoomCarousel from './MaukaRoomCarouselComponent ';


function Banquet(props) {
    return (
        <React.Fragment>
            <h2>Banquet Room Rental</h2>
            <p className="px-3">
                The Villages of Kapolei Association has two opulent conference and ballroom style facilities for use by their homeowners! These multi-purpose style rooms can transform from Zumba to Wedding Receptions in a blink of an eye. Contact us at 808-674-4444 department 2 or e-mail at recreation@villagesofkapolei.com for more information to book your next event. 
            </p>
            <p className="px-3">
                To reserve a date, you must present a valid VOKA membership card (primary homeowner or leaseholder only) and the $250 security deposit.
            </p>
            <p>
                Banquet facilities are available during the weekdays for company meetings and conferences.
            </p>
            <Row className="text-center">
                <Col>
                    <h4 className="text-center">Makai Rec Center 1 Sample Arrangement</h4>
                                
                    <MakaiRoomCarousel />
                                
                    <img src="/assets/images/rec1_guest_seating.png" height="525px" alt="Recreation Center 1 Guest Seating Map" />
                </Col>                        
            </Row>
            <Row className="text-center">
                <Col>
                    <h4 className="text-center">Mauka Rec Center 2 Sample Arrangement</h4>
                                
                    <MaukaRoomCarousel />

                    <img src="/assets/images/rec2_guest_seating.png" height="525px" alt="Recreation Center 2 Guest Seating Map" /> 
                    <p className="text-center"> <strong>  Located across the street from the swimming pool </strong> </p>
                </Col>                        
            </Row>
            <h4 classname="mt-20">Weekend Rental Prices & Fees</h4>
            <h5>Revised March 2020</h5>
            
            <Table hover>
                <thead>
                    <tr>
                    <th>Item</th>
                    <th >Rate</th>
                    <th><p>Description</p>Makai</th>
                    <th>Mauka</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Security Deposit</td>
                        <th>$250</th>
                        <td>Required to hold reservation. The balance is due 2-weeks before party date.</td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td>Lunch Rates</td>
                        <th>$425</th>
                        <td>
                            First hour set-up, last hour clean-up
                            <p>10:00 am - 3:00 pm</p>
                            <p>First hour set-up, last hour clean-up;</p>
                            <p>Party time is 11:00 am - 2:00 pm</p>
                            <p>Full hall capacity = 240</p>
                        </td>
                        <td>
                            First hour set-up, last hour clean-up
                            <p>9:00 am - 2:00 pm</p> 
                            <p>First hour set-up, last hour clean-up;</p>
                            <p>Party time is 10:00 am - 1:00 pm</p>
                            <p>Full hall capacity = 240</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Honolulu Police Department (HPD) Rates for Lunch</td>
                        <th>
                            <p>-- </p>
                            <p >$219</p>
                            <p>$426</p>
                            <p>-- </p>
                            <p>$259</p>
                            <p>$506</p>
                        </th>
                        <td>
                            <p>No Alcohol</p>
                            <p>100 - 199 guests</p>
                            <p>200 - 240 guests</p>
                            <p>With alcohol</p>
                            <p>1 - 99 guests</p>
                            <p>100 - 240 guests</p>
                            <p>(Based on HPDs prevailing rates; subject to change at any time)</p>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Dinner Rates</td>
                        <th>$510</th>
                        <td>
                            <p>4:00 pm - 11:00 pm</p>
                            <p>First hour set-up, last hour clean-up</p>
                            <p>Party time is 5:00 pm - 10:00 pm</p>
                            <p>Full hall capacity = 240</p>
                        </td>
                        <td>
                            <p>3:00 pm - 10:00 pm</p>
                            <p>First hour set-up, last hour clean-up</p>
                            <p>Party time is 4:00 pm - 9:00 pm</p>
                            <p>Full hall capacity = 240</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Honolulu Police Department (HPD) Rates for Dinner</td>
                        <th>
                            <p>-- </p>
                            <p>$319</p>
                            <p>$626</p>
                            <p>-- </p>
                            <p>$379</p>
                            <p>$746</p>
                        </th>
                        <td>
                            <p>No alcohol</p>
                            <p>100 - 199 guests</p>
                            <p>200 - 240 guests</p>
                            <p>With alcohol</p>
                            <p>1 - 99 guests</p>
                            <p>100 - 240 guests</p>
                            <p>(Based on HPDs prevailing rates; subject to change at any time)</p>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
    );
}

export default Banquet;
