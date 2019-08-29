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
            <ul className="NavLinks">
                {this.renderLinks()}
            </ul>
        )
    }
}

export default NavLinks;