import React, { PureComponent } from 'react';

import PageLayout from '../../../../components/pages/PageLayout'
import layers from './layers'

class Page extends PureComponent {

    state = {
        offset: this.props.offset,
        speed: 0.2
    }

    render() {
        return (
            <PageLayout {...this.state} layers={layers}>
                TOOLS
            </PageLayout>
        )
    }
}

export default Page