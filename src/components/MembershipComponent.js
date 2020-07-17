import React from 'react';
import {Col, Media, Row} from 'reactstrap';

function Membership(props) {
    return (
        <React.Fragment>
        <div className="Container">
            <Row className="align-items-center">
                <Col md={3}> 
                    <img src="/assets/images/reccenter1.jpg" alt="Recreational Grounds" width="100" height="100"  />                    
                </Col>
                <Col className="text-md-left">
                    <h2>Membership</h2>
                    <p>
                        Owner’s wishing to use the recreation center facilities, programs, and services are required to have a Villages of Kapolei Association I.D. card. The cost starts at $5.00 per card, per person, and is good for one year. Owners should bring a photo I.D. card. If you are obtaining a card for any child between the ages of 7 to 17 for the first time, please also bring the child’s birth certificate.
                    </p>

                    <p>
                        Absentee owners who rent out their homes should complete a Transfer of Privilege form before their renters come in for an I.D. card.
                    </p>

                    <p>
                    Other restrictions may apply.
                    </p>

                    <p>
                        For members in good standing.
                    </p>
                </Col>
            </Row>
        </div>
            
        </React.Fragment>
    );
};

export default Membership;