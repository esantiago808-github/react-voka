import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
        </React.Fragment> 
    );
}


export default HOAPage;