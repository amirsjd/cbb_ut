import React, { Component } from 'react'

import PageLayout from '../../../../components/widgets/Parallax/PageLayout'

import './desc-page.scss'
import layers from './layers'

class Page extends Component {

    config = {
        offset: this.props.offset,
        speed: 0
    }
    
    render() {
        const { scrollTo } = this.props
        return (
            <PageLayout {...this.config} layers={layers}>
                <div className="desc-page"
                    onClick={() => scrollTo(1)}>
                    <>People.</>
                </div>
            </PageLayout>
        )
    }
}

export default Page;