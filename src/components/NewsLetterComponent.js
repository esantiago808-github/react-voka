import React from 'react';

function Newsletter(props) {
    return (
        <React.Fragment>
            <h2 class="text-center"> Villages of Kapolei Association News</h2>

            <div class="container">
                <div class="row pt-3 pb-3">
                    <div class="col-md-4 mx-auto">
                        <a href="https://villagesofkapolei.org/wp-content/uploads/2020/07/3rd-QTR-Kapolei-Newsletter-20.pdf" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/newsletter-q3.jpg" className="zoom" alt="3Q Newsletter" />
                            <p>3rd Quarter 2020 - Kapolei Newsletter</p>
                        </a>
                    </div>
                    <div class="col-md-4 mx-auto">
                        <a href="https://villagesofkapolei.org/wp-content/uploads/2020/04/2nd-Qtr-Kapolei20-web.pdf" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/newsletter-q2.jpg" className="zoom" alt="2Q Newsletter"/>
                            <p>2nd Quarter 2020 - Kapolei Newsletter</p>
                        </a>
                    </div>
                    <div class="col-md-4 mx-auto">
                        <a href="https://villagesofkapolei.org/wp-content/uploads/2019/12/1st-Qtr-Kapolei20.web-002.pdf" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/newsletter-q1.jpg" className="zoom" alt="1Q Newsletter"/>
                            <p>1st Quarter 2020 - Kapolei Newsletter</p>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment> 
    );
}


export default Newsletter;