import React, { PureComponent } from 'react';

import './title-bar.scss'

class TitleBar extends PureComponent {

    render() {
        return (
            <div className="TitleBar">
                <svg width="8em" height={5}>
                    <line x1={0} y1={0} x2="8em" y2={0} className="TitleLine" />
                </svg>
                
                <div className="Title" style={{}}>
                    {this.props.pageTitle}
                </div>

                <svg width="8em" height={5}>
                    <line x1={0} y1={0} x2="8em" y2={0} className="TitleLine" />
                </svg>
            </div>
        )
    }
}

export default TitleBar;