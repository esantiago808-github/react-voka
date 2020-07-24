import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Bulletin from './BulletinCardsComponent';
import NewsLetter from './NewsLetterComponent';




function News(props) {
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
            <NewsLetter />
            <hr />
            <h3>Bulletin Board</h3>
            <Bulletin />
        </React.Fragment> 
    );
}


export default News;