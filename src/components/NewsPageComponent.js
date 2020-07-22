import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Bulletin from './BulletinCardsComponent';


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

            <div class="container">
                <div class="row pt-3 pb-3">
                    <div class="col-md-8 mx-auto">
                        <h2 class="text-center"> Villages of Kapolei Association News</h2>
                        <ul className="list-unstyled">
                            <li> <a href="https://villagesofkapolei.org/wp-content/uploads/2020/07/3rd-QTR-Kapolei-Newsletter-20.pdf" target="_blank">3rd Quarter 2020 - Kapolei Newsletter</a></li>
                            <li> <a href="https://villagesofkapolei.org/wp-content/uploads/2020/04/2nd-Qtr-Kapolei20-web.pdf" target="_blank">2nd Quarter 2020 - Kapolei Newsletter</a></li>
                            <li> <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/1st-Qtr-Kapolei20.web-002.pdf" target="_blank">1st Quarter 2020 - Kapolei Newsletter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3>Bulletin Board</h3>
            <Bulletin />

        </React.Fragment> 
    );
}


export default News;