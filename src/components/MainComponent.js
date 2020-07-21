import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import HOAPage from './HOAPageComponent';
import EventsPage from './EventsPageComponent';
import Programs from './ProgramsComponent';
import Pool from './PoolComponent';
import Banquet from './BanquetComponent';
import News from './NewsPageComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BULLETIN } from '../shared/bulletin';
import { CONTACTS } from '../shared/contacts';
import { PROGRAMS } from '../shared/programs';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bulletin: BULLETIN,
            contacts: CONTACTS,
            programs: PROGRAMS,
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/hoa' component={HOAPage} />
                    <Route exact path='/events' component={EventsPage} />
                    <Route exact path='/news' component={News} />
                    <Route exact path='/programs' component={Programs} />
                    <Route exact path='/pool' component={Pool} />
                    <Route exact path='/banquet' component={Banquet} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;

