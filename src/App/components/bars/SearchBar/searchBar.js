import React, { Component } from 'react'

import './search-bar.scss'

class SearchBar extends Component {

    state = {
        show: this.props.show
    }

    renderExpand = () => {
        return (
            <div className="SearchBar-expand">
                <i className="fas fa-search" />
            </div>
        )
    }

    renderCollapse = () => {
        return (
            <div className="SearchBar-collapse">
                <i className="fas fa-search" />
            </div>
        )
    }

    render() {
        return (
            <div 
                onClick={() => this.setState({ show: true })}
                className="SearchBar-container" >
                {
                    this.state.show ? 
                    this.renderExpand() : 
                    this.renderCollapse()
                }
            </div>
        )
    }
}

export default SearchBar;