import React, { Component } from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons'

import './page-layout.scss'

class PageLayout extends Component {

    renderLayers = (layers) => {
        return layers.map((layer, i) => 
            {
                return (
                    <ParallaxLayer 
                        {...layer} key={i}
                        offset={layer.offset || this.props.offset}
                        className="pageLayer">

                        {layer.children}
                    </ParallaxLayer>
                )
            }
        )
    }

    render() {

        const { children, layers } = this.props

        return (
            <>
                {layers && this.renderLayers(layers)}

                <ParallaxLayer {...this.props}
                    className="pageLayer-content">
                    
                    {children}
                </ParallaxLayer>
            </>
        )
    }
}

export default PageLayout