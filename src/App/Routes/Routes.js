import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

//import PublicRoute from './AuthRoutes/publicRoute'
//import PrivateRoute from './AuthRoutes/PrivateRoute'
import Layout from '../components/Layout'
import { LayoutContext } from '../components/LayoutProvider'

import About from './About/About'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import News from './News/News'
import People from './People/People'
import PeopleGroup from './People/PeopleGroup'
import Person from './People/Person'
import Tools from './Tools/Tools'
import NotFound from './404/NotFound'
import Privacy from './Privacy/Privacy'
import Sitemap from './Sitemap/Sitemap'
import Search from './Search/Search'

class Routes extends Component { 

    withContext = (Comp) => (props) => (
        <LayoutContext.Consumer>
            {context => <Comp {...props} context={context} />}
        </LayoutContext.Consumer>
    )

    render() {
        const withContext = this.withContext
        const people_routes = "/people/:slug(graduates|professors|staff|faculty)"

        return (
            <Layout>
                <Switch>
                    <Redirect from="/login" to="/wp-login" />

                    <Route path="/search" component={Search}/>

                    <Route path="/blog/posts/:id" component={withContext(Blog)} />
                    <Route path="/blog/pages/:i" component={withContext(Blog)} />
                    <Route path="/blog" exact component={withContext(Blog)} />
                    
                    <Route path="/news/:id" component={News} />
                    <Route path="/news" exact component={News} />
                    
                    <Route path="/tools/:slug" component={Tools} />
                    <Route path="/tools" exact component={Tools} />

                    <Route path="/person/:slug" component={Person} />
                    <Route path={people_routes} component={PeopleGroup} />
                    <Route path="/people" exact component={withContext(People)} />

                    <Route path="/privacy" component={Privacy} />
                    <Route path="/sitemap" component={Sitemap} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={withContext(About)} />
                    
                    <Redirect from="/home" to="/" />
                    <Route path="/" exact component={withContext(Home)} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;