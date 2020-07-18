import React from 'react';

function Banquet(props) {
    return (
        <React.Fragment>
            <h2>Banquet Room Rental</h2>
                <div class="container">
                    <div className="row row-content text-center">
                        <div className="col text-center">
                            <h4 className="text-center">Makai Rec Center 1 Sample Arrangement</h4>
                            <img src="/assets/images/rec1_guest_seating.png" height="525px" alt="Recreation Center 1 Guest Seating Map" />
                        </div>
                        <div className="col">
                            <h4 className="text-center">Makau Rec Center 2 Sample Arrangement</h4>
                            <img src="/assets/images/rec2_guest_seating.png" height="525px" alt="Recreation Center 2 Guest Seating Map" /> 
                            <p className="text-center"> <strong>  Located across the street from the swimming pool </strong> </p>
                        </div>                
                    </div>        
                </div>  
        </React.Fragment>
    );
}

export default Banquet;
