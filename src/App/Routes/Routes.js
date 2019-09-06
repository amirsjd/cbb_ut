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
import Tools from './Tools/Tools'
import NotFound from './404/NotFound'

class Routes extends Component { 

    withContext = (Comp) => (props) => (
        <LayoutContext.Consumer>
            {context => <Comp {...props} context={context} />}
        </LayoutContext.Consumer>
    )

    render() {
        const withContext = this.withContext

        return (
            <Layout>
                <Switch>
                    <Redirect from="/home" to="/" />

                    <Route path="/blog/posts/:postid" component={Blog} />
                    <Route path="/blog/authors/:author" component={Blog} />
                    <Route path="/blog" exact component={withContext(Blog)} />
                    
                    <Route path="/news/:category" component={News} />
                    <Route path="/news/:id" component={News} />
                    <Route path="/news" exact component={News} />
                    
                    <Route path="/tools/:tool" component={Tools} />
                    <Route path="/tools" exact component={Tools} />

                    <Route path="/people/:title" component={People} />
                    <Route path="/people" exact component={People} />

                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={withContext(About)} />
                    
                    <Route path="/home" component={Home} />
                    
                    <Route path="/" exact component={withContext(Home)} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;