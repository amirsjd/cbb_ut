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
            <PageLayout {...this.config} layers={layers}>
                
            </PageLayout>
        )
    }
}

export default Page;