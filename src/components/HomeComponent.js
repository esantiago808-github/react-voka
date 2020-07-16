import React from 'react';
import HomeCarousel from './HomeCarouselComponent'; 

function Home(props) {
    return (
        <React.Fragment>
            
            <div className="container">
                <div className="row center">
                    <h1>Home Page</h1>
                </div>
                <div className="row center">
                    <HomeCarousel />
                </div>
                <div className="row">
                <p>The Villages of Kapolei is a Planned Community and part of the new city located on the Ewa plains of Oahu, Hawaii. The community features single family homes, condominiums, and rental apartments, approximately 5,000 units. Our community continues to grow as Kapolei, Second City is under development. The master plan community consists of the highest rated elementary, middle and high schools in the state of Hawaii, along with churches, parks, recreation centers, nearby retail centers, restaurants, and a 4 1/2-star Golf Digest rated golf course, spread over 888-acres of land.</p>

                <p>The Villages of Kapolei is comprised of 8 Villages:</p>
                
                <ul>
                    <li>Kumu Iki</li>
                    <li>Aeloa</li>
                    <li>Malanai</li>
                    <li>Kekuilani</li>
                    <li>Iwalani</li>
                    <li>Malu’ohai</li>
                    <li>Kapolei Kai</li>
                    <li>Kaupe’a</li>
                </ul>
                <p>With many of the businesses adding a second location or moving to Kapolei our residents are enjoying the decreased commute time and improved family time.</p>
                </div>

            </div>
            
            
        </React.Fragment>
        
    );
    
    
}


export default Home;