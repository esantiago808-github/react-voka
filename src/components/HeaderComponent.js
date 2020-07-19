import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-md m-1">
                                <h1><strong>Villages of Kapolei</strong></h1>
                                <h4>Second City Planned Community</h4>  
                            </div>
                            <div className="col">
                                <Button>
                                    <a className="text-white" href="https://owner.topssoft.com/VillagesofKapoeli/Account/Login" target="_blank">
                                        Payment
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="/assets/images/voka_logo3.png" height="30" alt="VOKA Logo" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/hoa">
                                        <i className="fa fa-list fa-lg" /> HOA
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/events">
                                        <i className="fa fa-info fa-lg" /> Events
                                    </NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/news">
                                        <i className="fa fa-address-card fa-lg" /> News
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;
