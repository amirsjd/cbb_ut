import React, { Component } from 'react';

class About extends Component {

    config = {
        hasNavBar: true, 
        hasTitleBar: false,
        hasScrollBar: false,
        pages: 1
    }

    componentWillMount() {
        this.props.context.updateStatus({
            ...this.config,
        })
    }

    render() {
        return (
            <div>
                About
            </div>
        );
    }
}

export default About;