import React, { Component } from 'react'
import { Parallax } from 'react-spring/renderprops-addons'

import './people.scss'

import Pages from './Pages/Pages'

class People extends Component {

    config = {
        hasNavBar: true, 
        hasTitleBar: false,
        hasScrollBar: false,
        pages: 2
    }

    componentWillMount() {
        this.props.context.updateStatus({...this.config})
    }

    scrollTo = (page) => this.parallax.scrollTo(page)

    render() {
        
        return (
            <div className="People">
                <Parallax
                className="parallax scrollableContainer"
                ref={ref => this.parallax = ref}
                pages={this.config.pages}
                vertical
                scrolling={true}
                style={{
                    width: '100vw',
                    position: 'relative'
                }}
                config={{
                    mass: 1,
                    friction: 100,
                    tension: 500
                }}>
                    <Pages scrollTo={this.scrollTo} />
                </Parallax>
                
            </div>
        )
    }
}

export default People