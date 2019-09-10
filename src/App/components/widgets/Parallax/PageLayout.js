import React, { Component } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons'

import './page-layout.scss'

class PageLayout extends Component {

    renderLayers = (layers) => {
        return layers.map((layer, i) => 
            {
                const { style, speed, children, factor, offset } = layer
                return (
                    <ParallaxLayer 
                        key={i} 
                        style={style} 
                        speed={speed}
                        offset={offset || this.props.offset}
                        factor={factor}
                        className="pageLayer">

                        {children}
                    </ParallaxLayer>
                )
            }
        )
    }

    render() {

        const { offset, style, children, layers } = this.props

        return (
            <>
                {layers && this.renderLayers(layers)}

                <ParallaxLayer 
                    offset={offset} 
                    speed={0} 
                    className="pageLayer-content"
                    style={style}>
                    
                    {children}
                </ParallaxLayer>
            </>
        )
    }
}

export default PageLayout