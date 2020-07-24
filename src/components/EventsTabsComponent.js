import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Membership from './MembershipComponent';
import ProgramCards from './ProgramCardsComponent';
import Programs from './ProgramsComponent';
import Banquet from './BanquetComponent';
import Neighborhood from './NWatchComponent';
import Pool from './PoolComponent';


const EventsTab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <React.Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1', id: 'memberTab' })}
            onClick={() => { toggle('1'); }} >
            Membership
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2', id: 'programsTab' })}
            onClick={() => { toggle('2'); }} >
              Recreational Programs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3', id: 'programsSchTab' })}
            onClick={() => { toggle('3'); }} >
              Program Schedule
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4', id: 'poolTab' })}
            onClick={() => { toggle('4'); }} >
              Pool Schedule
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5', id: 'banquetTab' })}
            onClick={() => { toggle('5'); }} >
              Banquet Room Rental
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '6', id: 'neighborTab' })}
            onClick={() => { toggle('5'); }} >
              Neighborhood Watch
          </NavLink>
        </NavItem>

      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12" >
              <Membership />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12" >
              <ProgramCards />
            </Col>
        </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12" >
              <Programs />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Col sm="12" >
              <Pool />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <Col sm="12" >
            <Banquet />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <Col sm="12" >
              <Neighborhood />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </React.Fragment>
  );
}

export default EventsTab;