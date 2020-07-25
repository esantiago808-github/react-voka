import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import HOATabs from './HOATabsComponent'; 

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
            <h1>Home Owners Association</h1>
            <HOATabs />
        </React.Fragment> 
    );
}


export default HOAPage;