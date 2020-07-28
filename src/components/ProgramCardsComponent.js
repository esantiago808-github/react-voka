import React, { Component } from 'react';
import { Row, Col, Container} from 'reactstrap';
import RenderPrograms from './RenderProgramsComponent';
import { PROGRAMS } from '../shared/programs';

class ProgramCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            programs: PROGRAMS
            }
        };

        render() {

            return (
                <React.Fragment>
                    <h3>Recreational Program Activities Information</h3>
                    <h5 className="text-danger"><strong>All Recreational Programs Cancelled Due COVID-19 Until Further Notice</strong></h5>

                    <Container>
                        <Row>
                            <Col className="pb-3">
                                <RenderPrograms program={this.state.programs} />
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            );
        } /*closing render */
    } /*closing component */

    export default ProgramCards;