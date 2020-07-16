import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function NewsPage(props) {
    return (
        <React.Fragment>
            <Breadcrumb tag="nav" listTag="div">
                <BreadcrumbItem>
                    <Link to="/home">
                        Home
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>News</BreadcrumbItem>
            </Breadcrumb>  
            <h1>News Page</h1>
        </React.Fragment> 
    );
}


export default NewsPage;