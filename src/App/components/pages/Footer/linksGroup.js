import React from 'react';
import { Link } from 'react-router-dom'

const LinksGroup = (props) => {
    const renderList = (list) => 
        list.map((item,i) => 
            <span className="footerPage-linksGroup-item" key={i}>
                <Link to={item.to}>
                    {item.title}
                </Link>
            </span>
        )

    return (
        <div className="footerPage-linksGroup-container" >
            <span className="footerPage-linksGroup-header">
                <Link to={props.group.to}>
                    {props.group.title}
                </Link>
            </span>
            <div className="footerPage-linksGroup-list">
                {renderList(props.group.list)}
            </div>
        </div>
    );
};

export default LinksGroup