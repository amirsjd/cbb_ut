import React, { Component } from 'react'

export default class NotFound extends Component {

    config = {
        hasScrollBar: false,
        hasTitleBar: false,
        hasNavBar: false
    }

    componentWillMount() {
        this.props.context.updateStatus({...this.config})
    }

    render() {
        return (
            <div>
                Sorry, couldn't find anything...
            </div>
        )
    }
}
