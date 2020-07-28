import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Bulletin from './BulletinCardsComponent';
import NewsLetter from './NewsLetterComponent';
import { BULLETIN } from '../shared/bulletin';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bulletin: BULLETIN
        };
    }
  
      render() {
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
                <Bulletin bulletin={this.state.bulletin} />
            </React.Fragment> 
          );
      }
  }
  
export default News;