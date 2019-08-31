import React, { Component } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons'

import './page-layout.scss'

class PageLayout extends Component {

    renderBackgroundLayers = () => {
        return this.props.layers.map((layer, i) => 
            {
                const { style, speed, children, factor } = layer
                return (
                    <ParallaxLayer 
                        key={i} 
                        style={style} 
                        speed={speed}
                        offset={this.props.offset}
                        factor={factor}
                        className="pageLayer">

                        {children}
                    </ParallaxLayer>
                )
            }
        )
    }

    render() {
        return (
            <>
                {
                    this.props.layers && 
                    this.renderBackgroundLayers()
                }

                <ParallaxLayer 
                    offset={this.props.offset} 
                    speed={this.props.speed} 
                    className="pageLayer-content"
                    style={this.props.style}>
                    
                    {this.props.children}
                </ParallaxLayer>
            </>
        )
    }
}

export default PageLayout