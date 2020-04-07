import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content, Footer } from 'react-mdl';
import Main from './main';


function Nav() {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header className='header-color's title="Brey's Portfolio" scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about-me">About Me</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Where to next?">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about-me">About Me</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
                <Footer className='footer-color'>
                    <Navigation>
                        <Link to='/'>Home</Link>
                        <Link to='/projects'>Projects</Link>
                    </Navigation>
                </Footer>
            </Layout>
        </div>
    )
};

export default Nav;