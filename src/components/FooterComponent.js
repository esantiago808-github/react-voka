import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <React.Fragment>
            <footer className="site-footer" >
                <div className="container-fluid">
                    <div className="row" id="footerAddress">             
                        <div className="col-4 col-sm-2 offset-1">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/hoa'>HOA</Link></li>
                                <li><Link to='/events'>Events</Link></li>
                                <li><Link to='/news'>News</Link></li>
                            </ul>
                        </div>
                        <div className="col-4 col-sm-3 text-center">
                            <h5>Social Media</h5>
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/villagesofkapoleiassociation/?hl=en" target="_blank"><i className="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/VillagesOfKapoleiAssociation" target="_blank"><i className="fa fa-facebook" /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="https://www.yelp.com/biz/villages-of-kapolei-association-kapolei" target="_blank"><i className="fa fa-yelp" /></a> 
                        </div>
                        
                        <div className="col-sm-4 text-center">
                            <a href="https://www.google.com/maps/place/Villages+of+Kapolei+Association/@21.3332567,-158.0748578,15z/data=!3m1!4b1!4m5!3m4!1s0x7c0063418f1da805:0x77beb3370b4c5aea!8m2!3d21.3332369!4d-158.0661245" target="_blank">Villages of Kapolei - Administration Office
                            91-111 Kama'aha Loop
                            Kapolei, HI 96707</a>
                            <a role="button" className="btn btn-link" href="tel:+18086744444"><i className="fa fa-phone" /> 1-808-674-4444</a><br />
                            <a role="button" className="btn btn-link" href="mailto:association@villagesofkapolei.co"><i className="fa fa-envelope-o" /> association@villagesofkapolei.com</a>
                        </div>
                    </div>
                    <div className="row" id="footerPrivacy">             
                        <div className="col offset-1">
                            <p>The Villages of Kapolei Association website is for informational purposes only. We do not collect, sell, or use site visitors information. Should you have questions regarding our
                            VillagesofKapolei.org or VillagesofKapolei.com web sites please e-mail us at: association@villagesofkapolei.com

                            or write to us at:

                            Villages of Kapolei Association WebPage, 91-1111 Kama’aha Loop, Kapolei HI 96707
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;
