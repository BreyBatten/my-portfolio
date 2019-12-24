import React from 'react';
import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import About from './about-me';
import Projects from './projects';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/about-me' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
    </Switch>
);

export default Main;