import React, { PureComponent } from 'react'

import './page-0.scss'
import PageLayout from '../PageLayout'
import layers from './layers'

class Page0 extends PureComponent {

    config = {
        offset: this.props.offset,
        speed: 0.2
    }

    scrollDown = (setPlxProps) => {
        setPlxProps('SCROLL', this.config.offset + 1)
    }

    render() {

        const { percentage, setPlxProps } = this.props
        const opacity = 1 - percentage

        return (
            <PageLayout {...this.config} 
                layers={layers}
                style={{ opacity }} >

                <div className="PageContent0" >
                    <div>
                        <span>Complex Biological Systems</span>
                        <span>& Bioinformatic</span> 
                    </div>

                    <div className="roundButton Button-LearnMore" >
                        Learn More
                    </div>

                    <div className="roundButton Button-About" >
                        About Us
                    </div>
                </div>

                <div 
                    className="ScrollDown" 
                    onClick={() => this.scrollDown(setPlxProps)}>

                    <span>Scroll Down</span>
                    <span><i className="fas fa-angle-down" /></span>
                </div>
            </PageLayout>
        )
    }
}

export default Page0;