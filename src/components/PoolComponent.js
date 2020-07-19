import React from 'react';
import { Table, Row } from 'reactstrap';
import PoolCarousel from './PoolCarouselComponent';

function Pool(props) {
    return (
        <React.Fragment>
            <h2>Pool Schedule</h2>

            <h5 className="text-danger pb-3"><strong>All Recreational Program Cancelled Due COVID-19 Until Further Notice</strong></h5>

            <PoolCarousel />

            <h5 className="text-center pt-3 pb-3"><img src="/assets/images/winter-pool-img.jpg" height="50" alt="Winter" /> Winter Schedule - January - March, November - December</h5>
    
                <Table hover>
                    <thead>
                        <tr>
                            <th>Days</th>
                            <th>Times</th>
                            <th>Pool Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Monday - Thursday</th>
                            <td>
                                <p>12:00 noon - 4:00 pm</p>
                                <p>4:00 - 5:00 pm</p>
                            </td>
                            <td>
                                <p>Open Swim</p>
                                <p>Swim Lessons*</p>
                            </td>
                        </tr>
                        <tr>
                        <th scope="row">Friday - Sunday</th>
                            <td>12:00 noon - 5:00 pm</td>
                            <td>Open Swim</td>
                        </tr>
                    </tbody>
                </Table>
            
            <h5 className="text-center pt-3 pb-3"> <img src="/assets/images/spring-pool-img.jpg" height="50" alt="Spring" /> Spring/Fall - April - May, September - October <img src="/assets/images/fall-pool-img.jpg" height="50" alt="Autumn" /> </h5> 

            <Table hover>
                <thead>
                    <tr>
                        <th>Days</th>
                        <th>Times</th>
                        <th>Pool Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Monday - Thursday</th>
                        <td>
                            <p>12:00 noon - 4:00 pm</p>
                            <p>4:00 - 6:00 pm</p>
                            <p>6:10 - 7:00 pm</p>
                        </td>
                        <td>
                            <p>Open Swim</p>
                            <p>Swim Lessons*</p>
                            <p>Open Swim / Classes</p>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">Friday - Saturday</th>
                        <td>12:00 noon - 8:00 pm</td>
                        <td>Open Swim</td>
                    </tr>
                    <tr>
                        <th scope="row">Sunday</th>
                        <td>12:00 noon - 6:00 pm</td>
                        <td>Open Swim</td>
                    </tr>
                </tbody>
                </Table>
        

            <h5 className="text-center pt-3 pb-3"> <img src="/assets/images/summer-pool-img.jpg" height="50" alt="Summer" /> Summer - June - August</h5>

            <Table hover className="pb-3">
                <thead>
                    <tr>
                        <th>Days</th>
                        <th>Times</th>
                        <th>Pool Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Monday - Thursday</th>
                        <td>
                            <p>12:00 noon - 4:00 pm</p>
                            <p>4:00 - 6:00 pm</p>
                            <p>6:10 - 8:00 pm</p>
                        </td>
                        <td>
                            <p>Open Swim</p>
                            <p>Swim Lessons*</p>
                            <p>Open Swim / Classes</p>
                        </td>
                    </tr>
                    <tr>
                    <th scope="row">Friday - Saturday</th>
                        <td>12:00 noon - 8:00 pm</td>
                        <td>Open Swim</td>
                    </tr>
                    <tr>
                        <th scope="row">Sunday</th>
                        <td>12:00 noon - 6:00 pm</td>
                        <td>Open Swim</td>
                    </tr>
                </tbody>
            </Table>

                <p><strong>* </strong> Closed to open swim from 4:00 - 6:00 pm when swim lessons are in session.</p>
                        
                <p>Closed the last Wednesday of every month at 6:00 pm for staff training. </p>

                <p>Please review all pool rules and guidelines prior to enjoying the facilities. </p>

                <p>Schedule subject to change at any time.</p> 
        </React.Fragment>
    );
}

export default Pool;