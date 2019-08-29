import React, { Component } from 'react'

import './nav-bar.scss'

class NavLogo extends Component {
    render() {
        return (
            <div className="NavLogo navbar-brand">
                <i className="fas fa-dna"/>
            </div>
        )
    }
}

export default NavLogo;