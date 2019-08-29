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

    setComponent = (Comp) => (props) => (
        <LayoutContext.Consumer>
            {context => <Comp {...props} context={context} />}
        </LayoutContext.Consumer>
    )

    render() {
        const setComponent = this.setComponent

        return (
            <div>
                <Layout 
                    user={this.props.user} >
                        
                    <Switch>
                        <Redirect from="/home" to="/" />

                        <Route path="/blog/:postid" component={Blog} />
                        <Route path="/blog/:author" component={Blog} />
                        <Route path="/blog" exact component={Blog} />

                        <Route path="/people/:person" component={People} />
                        <Route path="/people" exact component={People} />

                        <Route path="/news/:id" component={News} />
                        <Route path="/news" exact component={News} />

                        <Route path="/contact" component={Contact} />
                        <Route path="/about" component={About} />
                        <Route path="/tools" component={Tools} />
                        <Route path="/home" component={Home} />
                        
                        <Route path="/" exact component={setComponent(Home)} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </div>
        )
    }
}

export default Routes;