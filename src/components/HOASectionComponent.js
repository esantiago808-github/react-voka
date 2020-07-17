import React from 'react';

function HOASection(props) {
    return (
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="text-center">Home Association Dues</h3>
                        <p>
                            The pride of ownership of the Villages of Kapolei are paid for by our homeowners. These dues ensure that trees, roads, sidewalks, parks, recreational facilities, to name a few, are well maintained to be enjoyed by our families and guests.
                        </p>
                        <h4 class="text-center" id="topsPayHeader"> Tops Pay</h4>
                            <p>The link below explains how to use TOPS Pay.  If you have not received your TOPS ONE Home Owner’s e-mail link, it is because we do not have your e-mail address.  Please visit the office during normal business hours Monday through Friday from 9:00 a.m. to 5:00 p.m. for assistance in setting up your online account.</p>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://villagesofkapolei.org/wp-content/uploads/2020/02/TOPS-PAY-INSTRUCTIONS-01012020.pdf" target="_blank">TOPS Pay Instructions 01-01-2020</a>
                                </li>

                                 <li>
                                    <a href="https://villagesofkapolei.org/wp-content/uploads/2020/02/Tops-Owner-Access-Instructions-01012020.pdf" target="_blank">TOPS Owner Access Instructions 01-01-2020</a>
                                </li>

                                <li>
                                    <a href="https://owner.topssoft.com/VillagesofKapoeli/Account/Login" target="_blank">TOPS Home Owner Portal</a>
                                </li>                                    
                            </ul>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
            
export default HOASection;