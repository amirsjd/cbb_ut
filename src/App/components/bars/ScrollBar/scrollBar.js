import React, { PureComponent } from 'react';

import './scroll-bar.scss'
import Lines from './lines'
import PageIndicator from './pageIndicator'

class ScrollBar extends PureComponent {

    render() {

        const { pages, pageIndex } = this.props

        return (
            <div className="ScrollBar">
                <PageIndicator {...this.props} /> 
                <Lines pages={pages} pageIndex={pageIndex} />
            </div>
        )
    }
}

export default ScrollBar;