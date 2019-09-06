import React, { PureComponent } from 'react'
import { Transition, animated } from 'react-spring/renderprops'

import './nav-bar.scss'
import { headerLinks } from '../../../../static/config'

import NavLinks from './navLinks'
import NavLogo from './navLogo'
import SearchBar from '../SearchBar/searchBar.js'

class NavBar extends PureComponent {

    state = {
        iconUrl: "dna",
        links: headerLinks,
        searchToggle: false
    }

    renderBackground() {
        return (
            <Transition
            items={this.props.isScrolled}
            from={{ 
                backgroundColor: 'rgba(0,0,0,1)', 
                width: '100%', height: '100%', 
                position: 'absolute' 
            }}
            enter={{ opacity: 0.5 }}
            leave={{ opacity: 0 }} >
        
            { show => show && (props => <animated.div style={props} />) }
            </Transition>
        )
    }
    

    render() { 
        return (
            <nav className="NavBar">

                {this.renderBackground()}

                <div className="NavBar-logo">
                    <NavLogo icon={this.state.iconUrl} />
                </div>
                
                <div className="NavBar-links">
                    <NavLinks links={this.state.links} />
                </div>

                <div className="NavBar-searchBar">
                    <SearchBar collapse={this.state.searchToggle} />
                </div>
            </nav>
        )
    }
}

export default NavBar;