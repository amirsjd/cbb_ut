import React, { PureComponent } from 'react';

import PageLayout from '../../../../components/pages/PageLayout'
import layers from './layers'

class Page extends PureComponent {

    state = {
        offset: 2,
        speed: 0.2
    }

    render() {
        return (
            <PageLayout {...this.state} layers={layers}>
                <span onClick={() => this.props.setPlxProps('SCROLL',this.state.offset + 1)}>Some Content</span>
                TOOLS
            </PageLayout>
        )
    }
}

export default Page