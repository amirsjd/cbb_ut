import React, { PureComponent } from 'react';

import PageLayout from '../../../../components/widgets/Parallax/PageLayout'
import layers from './layers'

import './style.scss'

class Page extends PureComponent {

    config = {
        offset: this.props.offset,
        speed: 0
    }

    render() {
        return (
            <PageLayout {...this.config} 
                layers={layers} >

                <div className="toolsPage">
                    <div className="slider-container">
                        <div className="slider-button roundButton-filled">
                            <i className="fas fa-angle-left"/>
                        </div>
                        <div className="slider-content">
                            EVENTS!!
                        </div>
                        <div className="slider-button roundButton-filled">
                            <i className="fas fa-angle-right"/>
                        </div>
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default Page