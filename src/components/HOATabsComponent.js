import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Covenants from './CovenantsComponent';
import HOASection from './HOASectionComponent';
import Directors from './DirectorsComponent';

const HOATabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }} >
              Covenants/Design
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2'})}
              onClick={() => { toggle('2'); }} >
                HOA Dues
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3'})}
              onClick={() => { toggle('3'); }} >
                Board of Directors
            </NavLink>
          </NavItem>
        </Nav>
        
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" >
                <Covenants />
              </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12" >
              <HOASection />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12" >
              <Directors />
            </Col>
          </Row>
        </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }

export default HOATabs;