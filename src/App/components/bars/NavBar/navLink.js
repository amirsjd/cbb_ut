import React from 'react'
import { NavLink } from 'react-router-dom'

import './nav-bar.scss'

const NavLinkItem = (props) => {

    const { title, to, hasMenu, menu } = props.link

    const renderMenu = () => 
        menu.map((item,i) => 
            <NavLink key={i}
                to={item.to} 
                className="dropdown-menu-item" 
                activeClassName="NavLink-selected" >
                <span> • {item.title} </span>
            </NavLink>
        )

    
    return (
        <div className="NavLinks-item dropdown">
            <NavLink 
                to={to}
                className="NavLink"
                activeClassName="NavLink-selected" >

                {title}
            </NavLink>

            {hasMenu && 
            <div className="dropdown-menu">
                <div className="dropdown-menu-bg">
                    <div className="arrow-up" />
                    <div className="round-box" />
                </div>
                <div className="dropdown-menu-items">
                    {renderMenu()}
                </div>
            </div>}
        </div>
    )
}

export default NavLinkItem;