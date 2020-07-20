import React from 'react';
import { Table } from 'reactstrap';
import PoolCarousel from './PoolCarouselComponent';

function Pool(props) {
    return (
        <React.Fragment>
            <h2>Pool Schedule</h2>

            <h5 className="text-danger pb-3"><strong>All Pool Programs Cancelled Due COVID-19 Until Further Notice</strong></h5>

            <p className="pl-3 pr-3">
                Our pool is now open for recreational lap swimming 6:00 am – 9:00 am, (closed 9:00-11:00) and open again from 11:00 am to 5:00 pm. 
            </p>
            <ul className="text-left">
                <li>We have 5 lanes open in the big pool and one lane open in the middle pool  </li>
                <li>There is a time limit of one hour maximum, per day, per person</li>
                <li> A swim test may be required</li>
                <li>You must be able to swim 100 yards continuously, unassisted</li>
                <li>A face mask is required on property unless actively swimming </li>
                <li>No lounging or loitering on deck</li>
                <li>Please maintain 6 feet of social distancing</li>
            </ul>
            <p>   
                We recommend making a reservation for a lane by calling the Recreation Department at <a href="tel:+18086744444"> 1-808-674-4444</a> option 2.
            </p> 

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