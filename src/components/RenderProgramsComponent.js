import React, { Component } from 'react';
import {
    Card, CardText, CardBody, CardImg, CardTitle, CardSubtitle } from 'reactstrap';

class RenderPrograms extends Component {

    constructor(props) {
        super(props);
        this.state = { }
        };


    render() {

        const programCards = this.props.program.map(p => {
            return (
                <div key={p.id} className="col-md-5 m-1">
                    <Card>
                        <CardImg src={p.image} alt={p.alt} height="318" />
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

            </React.Fragment>
        );
    }
} /*closing render */


export default RenderPrograms;
