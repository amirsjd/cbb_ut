import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import './search-bar.scss'

class SearchBar extends Component {

    state = {
        show: false
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.history.push({
            pathname: '/search/',
            search: `?q=${ 
                encodeURIComponent(
                    this.query.value
                ).replace(/%20/g, "+")
            }`
        })
    }

    renderExpand = () => {
        return (
            <form 
                className="expand" 
                onSubmit={this.handleSubmit} 
                >

                <input type="text"
                    placeholder="search..." 
                    ref={input => this.query = input}
                />

                <button type="submit"
                    className="fas fa-search SearchBar-button" 
                />

            </form>
        )
    }

    renderCollapse = () => {
        return (
            <div className="collapse">
                <i className="fas fa-search SearchBar-button" />
            </div>
        )
    }

    render() {
        const show = this.state.show
        
        return (
            <div className="SearchBar" >
                <div
                    onMouseOver={() => this.setState({ show: true })}
                    onMouseLeave={() => this.setState({ show: false })}
                    className="SearchBar-container">
                    {show ? 
                    this.renderExpand() : 
                    this.renderCollapse()}
                </div>
            </div>
        )
    }
}

export default withRouter(SearchBar)