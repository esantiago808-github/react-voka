import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import BoardCarousel from './HOADirectorsComponent';
import HOASection from './HOASectionComponent';

function HOAPage(props) {
    return (
        <React.Fragment>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem>
                    <Link to="/home">
                        Home
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>HOA</BreadcrumbItem>
            </Breadcrumb>  
            <h1>HOA Page</h1>
            <BoardCarousel />
            <h3>Board of Directors</h3>
            <div className="container">
                <div className="row row-content">
                    <div className="col-md-8 mx-auto">
                        <h4 className="text-center" id="ccdr"> Covenants & Designs Rules</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/DESIGN-COMMITTEE-RULES-120616.pdf" target="_blank">Design Committe Rules 12-06-2016</a>
                            </li>
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/Land-Classifications-Restrictive-Covenants-5.03.pdf" target="_blank">Land Classifications & Restrictive Covenants 05-2003</a>
                            </li>
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/VOKA-Flag-Pole-Guide-Line.pdf" target="_blank">VOKA Flag Pole Guide Line</a>
                            </li>
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/Fee-Schedule-Dec-2019-18.pdf" target="_blank">Fee Schedule 12-18-2019</a>
                            </li>
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/DESIGN-APPLICATION-update_.pdf" target="_blank">Design Application update</a>
                            </li>
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2020/01/Complaint-Form.pdf" target="_blank">Complaint Form</a>
                            </li> 
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2020/02/Fourth-Restated-DCCR-Newspaper-Style.pdf" target="_blank">Fourth Restated DCCR Newspaper Style 07-26-2016</a>
                            </li>               
                        </ul>
                    </div>
                </div>               
            </div> 
            <HOASection />           
        </React.Fragment> 
    );
}


export default HOAPage;