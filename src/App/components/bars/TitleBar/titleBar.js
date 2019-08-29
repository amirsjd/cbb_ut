import React, { PureComponent } from 'react';
import { animated } from 'react-spring'

import './title-bar.scss'

class TitleBar extends PureComponent {

    render() {
        const lineWidth = window.innerHeight/6
        return (
            <div className="TitleBar">
                <svg width={lineWidth} height={5}>
                    <line x1={0} y1={0} x2={lineWidth} y2={0} className="TitleLine" />
                </svg>
                
                <animated.div className="Title" style={{}}>
                    {this.props.pageTitle}
                </animated.div>

                <svg width={lineWidth} height={5}>
                    <line x1={0} y1={0} x2={lineWidth} y2={0} className="TitleLine" />
                </svg>
            </div>
        )
    }
}

export default TitleBar;