import React from 'react';
import { Link } from 'react-router-dom'

const LinksGroup = (props) => {
    const renderList = (list) => 
        list.map((item,i) => 
            <span className="links-group-item" key={i}>
                <Link to={item.to}>
                    {item.title}
                </Link>
            </span>
        )

    return (
        <div className="links-group-container" >
            <span className="links-group-header">
                <Link to={props.group.to}>
                    {props.group.title}
                </Link>
            </span>
            <div className="links-group-list">
                {renderList(props.group.list)}
            </div>
        </div>
    );
};

export default LinksGroup