import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Membership from './MembershipComponent';
import Programs from './ProgramsComponent';
import Banquet from './BanquetComponent';
import Neighborhood from './NWatchComponent';
import Pool from './PoolComponent';


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
            <Membership />
            <Programs />
            <Pool />
            <Banquet />
            <Neighborhood />
        </React.Fragment> 
    );
}


export default EventsPage;