import React from 'react';
import { Row, Col } from 'reactstrap';
import NeighborCarousel from './NeighborCarouselComponent';

function Neighborhood(props) {
    return (
        <React.Fragment>
            <h2>Neighborhood Watch</h2>
            <NeighborCarousel />            
            <p className="mx-5">
                Hear from HPD District 8 Community Policing Team Officers about the statistics in our area, meet your neighbors, and share any reports of suspicious activity. Help make our community safer through prevention, reporting, and enforcement.
            </p>   
            <p className="mx-5 pt-10">
                We encourage people to come to these meetings and get involved. We want each village to eventually start their own walking citizen patrol, so we need you!
            </p>
            <p className="mx-5">
                Meetings are held at 6:30 p.m., on the last Monday of every month over at Rec 2.
            </p>
            <h4>2020 Meeting Dates</h4>
            <ul className="list-unstyled">
                <li>February 24</li>
                <li>March 30</li>
                <li>April 27</li>
                <li>May 18 (one week early due to Memorial Day)</li>
                <li>June 29</li>
                <li>Jul 27</li>
                <li>August 31</li>
                <li>September 28</li>                
                <li>October 26</li>
                <li>November 30</li>                
                <li>December 28</li>
            </ul>
            <Row>
                <Col sm={3}>
                    <a href="https://www.honolulu.gov/it/default/224-site-dit-cat/34774-honolulu311.html#gsc.tab=0" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/HPD311Icon.png" height="200" alt="HPD 311" />
                    </a>
                </Col>
                <Col>
                    <h4>Honolulu 311 Application</h4>
                    <p className="mx-5">
                    Honolulu 311 is the official mobile application for the City & County of Honolulu. You can report non-emergencies and track the status of your service request. Report potholes, broken streetlights, cracked sidewalks, illegal dumping, vandalized/broken signs and more via your smartphone. A picture tells a thousand words and the Honolulu 311 app makes it a snap. Download it today!
                    </p>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Neighborhood;