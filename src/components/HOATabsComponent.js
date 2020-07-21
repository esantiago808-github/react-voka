import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import HOASection from './HOASectionComponent';
import Directors from './DirectorsContactComponent';

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
            <h4 className="text-center" id="ccdr"> Covenants & Designs Rules</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/DESIGN-COMMITTEE-RULES-120616.pdf" target="_blank">Design Committe Rules 12-06-2016</a>
                            </li>
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/Land-Classifications-Restrictive-Covenants-5.03.pdf" target="_blank">Land Classifications & Restrictive Covenants 05-2003</a>
                            </li>
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/VOKA-Flag-Pole-Guide-Line.pdf" target="_blank">VOKA Flag Pole Guide Line</a>
                            </li>
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/Fee-Schedule-Dec-2019-18.pdf" target="_blank">Fee Schedule 12-18-2019</a>
                            </li>
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/DESIGN-APPLICATION-update_.pdf" target="_blank">Design Application update</a>
                            </li>
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2020/01/Complaint-Form.pdf" target="_blank">Complaint Form</a>
                            </li> 
                            <li>
                                <a href="https://villagesofkapolei.org/wp-content/uploads/2020/02/Fourth-Restated-DCCR-Newspaper-Style.pdf" target="_blank">Fourth Restated DCCR Newspaper Style 07-26-2016</a>
                            </li>               
                        </ul>

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