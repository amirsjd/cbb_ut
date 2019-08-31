import React, { PureComponent } from 'react';

import PageLayout from '../../../../components/pages/PageLayout'
import layers from './layers'

class Page extends PureComponent {

    state = {
        offset: 3,
        speed: 0.2
    }

    render() {
        return (
            <PageLayout {...this.state} layers={layers}>
                <span onClick={() => this.props.setPlxProps('SCROLL', 0)}>Some Content</span>
            </PageLayout>
        )
    }
}

export default Page;