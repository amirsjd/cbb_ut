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
                EVENTSSSSSSS!!!!!!!
                new posts category : events
            </PageLayout>
        )
    }
}

export default Page;