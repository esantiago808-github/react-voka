import React, { Component } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardFooter, CardSubtitle, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, FormFeedback
} from 'reactstrap';

class RenderPrograms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            participantFirst: '',
            participantLast: '',
            parentFirst: '',
            parentLast: '',
            phone: '',
            email: '',
            child: false,
            programSelect: '',
            isModalOpen: false,
            touched: {
                participantFirst: false,
                participantLast: false,
                parentFirst: false,
                parentLast: false,
                phone: false,
                email: false
            }
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(participantFirst, participantLast, parentFirst, parentLast, phone, email) {

        const errors = {
            participantFirst: '',
            participantLast: '',
            parentFirst: '',
            parentLast: '',
            phone: '',
            email: ''
        };

        if (this.state.touched.participantFirst) {
            if (participantFirst.length < 2) {
                errors.participantFirst = 'First name must be at least 2 characters.';
            } else if (participantFirst.length > 15) {
                errors.participantFirst = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.participantLast) {
            if (participantLast.length < 2) {
                errors.participantLast = 'Last name must be at least 2 characters.';
            } else if (participantLast.length > 15) {
                errors.participantLast = 'Last name must be 15 or less characters.';
            }
        }

        if (this.state.touched.parentFirst) {
            if (parentFirst.length < 2) {
                errors.parentFirst = 'First name must be at least 2 characters.';
            } else if (parentFirst.length > 15) {
                errors.parentFirst = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.parentLast) {
            if (parentLast.length < 2) {
                errors.parentLast = 'Last name must be at least 2 characters.';
            } else if (parentLast.length > 15) {
                errors.parentLast = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phone && !reg.test(phone)) {
            errors.phone = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {

        const errors = this.validate(this.state.participantFirst, this.state.participantLast, this.state.parentFirst, this.state.parentLast, this.state.phone, this.state.email);

        const programCards = this.props.program.map(p => {
            return (
                <div key={p.id} className="col-md-5 m-1">
                    <Card>
                        <CardBody>
                            <CardTitle>{p.programname}</CardTitle>
                            <CardSubtitle>{p.days}, {p.time}, {p.place}</CardSubtitle>
                            <br />
                            <CardText>
                                <p>Fee: {p.fee}</p>
                                <p>Ages: {p.age}</p>
                                <p>{p.description}</p>
                                <p>Instructor: {p.instructorname}</p>
                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <Button>Enroll</Button>
                        </CardFooter>
                    </Card>
                </div>
            );
        });

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {programCards}
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Actvity Enrollment Form</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="participantFirst">Participant First Name</Label>
                                <Input type="text" name="participantFirst" id="participantFirst" placeholder="Participant First Name"
                                    value={this.state.participantFirst}
                                    invalid={errors.participantFirst}
                                    onBlur={this.handleBlur("participantFirst")}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.participantFirst}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="participantLast">Participant Last Name</Label>
                                <Input type="text" name="participantLast" id="participantLast" placeholder="Participant Last Name"
                                    value={this.state.participantLast}
                                    invalid={errors.participantLast}
                                    onBlur={this.handleBlur("participantLast")}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.participantLast}</FormFeedback>
                            </FormGroup>
                            <FormGroup row check>
                                <Label check htmlFor="child">
                                    <Input type="checkbox" name="child"
                                        checked={this.state.child}
                                        onChange={this.handleInputChange}
                                    />{' '}
                                    If the participant is under 18-years old, check the box
                                    </Label>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="parentFirst">Parent First Name</Label>
                                <Input type="text" name="parentFirst" id="parentFirst" placeholder="Parent First Name"
                                    value={this.state.parentFirst}
                                    invalid={errors.parentFirst}
                                    onBlur={this.handleBlur("parentFirst")}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.parentFirst}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="parentLast">Parent Last Name</Label>
                                <Input type="text" name="parentLast" id="parentLast" placeholder="Parent Last Name"
                                    value={this.state.parentLast}
                                    invalid={errors.parentLast}
                                    onBlur={this.handleBlur("parentLast")}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.parentLast}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Email Address"
                                    value={this.state.email}
                                    invalid={errors.email}
                                    onBlur={this.handleBlur("email")}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input type="tel" name="phone" id="phone" placeholder="Phone Number"
                                    value={this.state.phone}
                                    invalid={errors.phone}
                                    onBlur={this.handleBlur("phone")}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.phone}</FormFeedback>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="programSelect">Select a Recreational Program</Label>
                                <Input type="select" name="programSelect" id="programSelect"
                                    value={this.state.programSelect}
                                    onChange={this.handleInputChange} >
                                    <option htmlFor="aqua">Aqua Jogging</option>
                                    <option htmlFor="clubScouts">Club Scouts</option>
                                    <option htmlFor="stretch">Feel Good Stretch</option>
                                    <option htmlFor="girlScouts">Girl Scouts</option>
                                    <option htmlFor="hipHop">Hip Hop</option>
                                    <option htmlFor="jrSwim">Junior Swim Team</option>
                                    <option htmlFor="karate">Karate</option>
                                    <option htmlFor="keikiSteps">Keiki Steps</option>
                                    <option htmlFor="kickboxing">Kickboxing</option>
                                    <option htmlFor="kpok">KPOK Cultural Hui</option>
                                    <option htmlFor="orbix">Orbix Fitness</option>
                                    <option htmlFor="taekwondo">Tropic Lightening Taekwondo</option>
                                    <option htmlFor="srClub">Senior Club</option>
                                    <option htmlFor="yoga">Yoga</option>
                                    <option htmlFor="zumba">Zumba</option>
                                </Input>
                            </FormGroup>
                            <Button type="submit" value="submit">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
} /*closing render */


export default RenderPrograms;
