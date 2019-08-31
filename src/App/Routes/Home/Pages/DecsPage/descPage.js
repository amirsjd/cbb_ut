import React, { PureComponent } from 'react'

import './desc-page.scss'
import PageLayout from '../../../../components/pages/PageLayout'
import layers from './layers'

class Page extends PureComponent {

    config = {
        offset: this.props.offset,
        speed: 0.2
    }

    scrollDown = (setPlxProps) => {
        setPlxProps('SCROLL', this.config.offset + 1)
    }

    render() {

        const { setPlxProps } = this.props
        return (
            <PageLayout {...this.config} layers={layers} >

                <div className="Home-descPage-content" >
                    <div>
                        <span>Complex Biological Systems</span>
                        <span>& Bioinformatic</span> 
                    </div>

                    <div className="roundButton Home-descPage-learnMoreButton" >
                        Learn More
                    </div>

                    <div className="roundButton Home-descPage-aboutButton" >
                        About Us
                    </div>
                </div>

                <div 
                    className="Home-descPage-scrollDownButton" 
                    onClick={() => this.scrollDown(setPlxProps)}>

                    <span>Scroll Down</span>
                    <span><i className="fas fa-angle-down" /></span>
                </div>
            </PageLayout>
        )
    }
}

export default Page;