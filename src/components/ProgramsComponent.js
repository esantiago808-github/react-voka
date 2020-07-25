import React from 'react';
import ProgramSchedule from './ProgramsSchComponent';

function Programs(props) {
    return (
        <React.Fragment>
            <h2>Recreational Programs</h2>
            <h4>Weekly Schedlue</h4>
            <h5>No scheduled program events on Sundays</h5>
            <h5 className="text-danger"><strong>All Recreational Program Cancelled Due COVID-19 Until Further Notice</strong></h5>
            
            <ProgramSchedule />
        </React.Fragment>
    );
}

export default Programs;