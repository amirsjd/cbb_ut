import React, { Component } from 'react';

class Blog extends Component {
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
                
            </div>
        );
    }
}

export default Blog;