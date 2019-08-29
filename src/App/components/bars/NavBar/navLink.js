import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './nav-bar.scss'

class NavLinkItem extends Component {
    render() {
        const { title, linkTo } = this.props.link
        return (
            <li className="NavLinks-item">
                <NavLink 
                    to={`/${linkTo}`}
                    className="NavLink" 
                    activeClassName="NavLink-selected" >

                    {title}
                </NavLink>
            </li>
        )
    }
}

export default NavLinkItem;