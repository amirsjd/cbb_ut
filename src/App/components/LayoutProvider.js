import React, { Component } from 'react'

export const LayoutContext = React.createContext()

class LayoutProvider extends Component {

    state = {
        status: {
            hasScrollBar: false, hasTitleBar: false, hasNavBar: true,
            percentage: 0, pageIndex: 0, pageTitle: '',
        }
    }

    render() {
        return (
            <LayoutContext.Provider value={{ 
                state: this.state,
                updateStatus: (status) => this.setState({ status })
            }}>

                {this.props.children}
            </LayoutContext.Provider>
        )
    }
}

export default LayoutProvider