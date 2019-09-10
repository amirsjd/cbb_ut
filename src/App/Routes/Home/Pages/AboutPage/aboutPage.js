import React, { PureComponent } from 'react';

import PageLayout from '../../../../components/widgets/Parallax/PageLayout'
import layers from './layers'

class Page extends PureComponent {

    config = {
        offset: this.props.offset,
        speed: 0.2
    }

    render() {
        return (
            <PageLayout {...this.config} layers={layers}>
                <span onClick={() => this.props.setPlxProps('SCROLL', 0)}>Some Content</span>
            </PageLayout>
        )
    }
}

export default Page;