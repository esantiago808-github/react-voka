import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from 'reactstrap';

const Enroll = (props) => {
  return (
    <Form>
        <Container>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="participantFirst">Participant First Name</Label>
                        <Input type="text" name="participantFirst" id="participantFirst" placeholder="Participant First Name" />
                    </FormGroup>
                </Col>
                    <FormGroup>
                        <Label for="participantLast">Participant Last Name</Label>
                        <Input type="text" name="participantLast" id="participantLast" placeholder="Participant Last Name" />
                    </FormGroup>
                <Col>
                    <FormGroup check>
                        <Label check for="myCheck">
                        If the participant is under 18-years old, check the box
                        <br />
                        <Input type="checkbox" id="myCheck" />{' '}
                        </Label>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                <FormGroup id="parentf" style={{display: 'block'}}>
                        <Label for="parentFirst">Parent First Name</Label>
                        <Input type="text" name="parentFirst" id="parentFirst" placeholder="Parent First Name" />
                    </FormGroup>

                </Col>
                <Col>
                    <FormGroup id="parentl" style={{display: 'block'}}>
                        <Label for="parentLast">Parent Last Name</Label>
                        <Input type="text" name="parentLast" id="parentLast" placeholder="Parent Last Name" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email Address" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="phone">Phone Number</Label>
                        <Input type="tel" name="phone" id="phone" placeholder="Phone Number" />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>            
                    <FormGroup>
                        <Label for="programSelect">Select a Recreational Program</Label>
                        <Input type="select" name="programSelect" id="programSelect">
                        <option for="aqua">Aqua Jogging</option>
                        <option for="clubScouts">Club Scouts</option>
                        <option for="stretch">Feel Good Stretch</option>
                        <option for="girlScouts">Girl Scouts</option>
                        <option for="hipHop">Hip Hop</option>
                        <option for="jrSwim">Junior Swim Team</option>
                        <option for="karate">Karate</option>
                        <option for="keikiSteps">Keiki Steps</option>
                        <option for="kickboxing">Kickboxing</option>
                        <option for="kpok">KPOK Cultural Hui</option>
                        <option for="orbix">Orbix Fitness</option>
                        <option for="taekwondo">Tropic Lightening Taekwondo</option>
                        <option for="srClub">Senior Club</option>
                        <option for="yoga">Yoga</option>
                        <option for="zumba">Zumba</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="programDetails">Program Details</Label>
                        <div id="programDetails"> </div>
                    </FormGroup>
                </Col>
            </Row>
            <Row className="center pb-3">
                <Col>
                    <Button>Submit</Button> {''} <Button>Cancel</Button>
                </Col>
            </Row>
        </Container>
    </Form>
  );
}

export default Enroll;