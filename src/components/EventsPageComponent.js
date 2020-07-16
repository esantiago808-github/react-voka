import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function EventsPage(props) {
    return (
        <React.Fragment>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem>
                    <Link to="/home">
                        Home
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>Events</BreadcrumbItem>
            </Breadcrumb>  
            <h1>Events Page</h1>
        </React.Fragment> 
    );
}


export default EventsPage;