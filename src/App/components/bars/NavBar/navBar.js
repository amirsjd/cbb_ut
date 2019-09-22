import React, { PureComponent } from 'react'
import { Transition } from 'react-spring/renderprops'

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
                    backgroundColor: 'rgba(0,0,0,0.2)', 
                    width: '100%', height: '100%', 
                    position: 'absolute', 
                    opacity: 0,
                    backdropFilter: 'blur(5px) brightness(0.5)'
                }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }} >
        
            { show => show && (props => <div style={props} />) }
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