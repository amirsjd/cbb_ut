import React, { Component } from 'react';

import PageLayout from '../PageLayout'

import './footer.scss'

const layers = []

class FooterPage extends Component {

    config = {
        offset: this.props.offset,
        speed: 0.2
    }

    render() {
        return (
            <PageLayout {...this.config} layers={layers} >
                <div className="footerPage">
                    Footer
                </div>
            </PageLayout>
        )
    }
}

export default FooterPage;