import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import './nav-bar.scss'

const NavLinkItem = (props) => {

    const { title, to, hasMenu, menu } = props.link

    const renderMenu = () => 
        menu.map((item,i) => 
            <Link to={item.to} className="dropdown-menu-item" key={i}>
                {item.title}
            </Link>
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