import React, { Component } from 'react'
import NavLink from './navLink'

import './nav-bar.scss'

class NavLinks extends Component {

    renderLinks = () => {
        return this.props.links.map((link, i) => {
            return link.show && (
                <NavLink link={link} key={i} />
            )
        }) 
    }

    render() {
        return ( 
            <div className="NavLinks">
                {this.renderLinks()}
            </div>
        )
    }
}

export default NavLinks;