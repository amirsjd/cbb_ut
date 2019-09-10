import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getPage, getPageChildren, PAGES } from '../../../actions'

import './people.scss'

class People extends Component {

    config = {
        hasNavBar: true, 
        hasTitleBar: false,
        hasScrollBar: false,
        pages: 2
    }

    componentWillMount() {
        this.props.context.updateStatus({...this.config})
        this.props.getPage(PAGES.PEOPLE)
        this.props.getPageChildren(PAGES.PEOPLE)
    }

    renderGroups = (children) => {
        if (children && children.length > -1) 
            return children.map((child, i) => (
                <Link to={'/' + child.slug} key={i}>
                    <div className="group-banner">
                        <div dangerouslySetInnerHTML={{
                            __html: child.content.rendered
                        }} />
                        <span>{child.title.rendered}</span>
                    </div>
                </Link>
            ))
    }

    render() {
        const { data, children, location } = this.props
        
        return (
            <div className="People">
                People
                <div className="groups">
                    {this.renderGroups(children)}
                    
                    <div className="description"
                        dangerouslySetInnerHTML={{
                            __html: data && data.content? 
                                data.content.rendered 
                                : 
                                null
                            }}>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.page.peoplePage,
        children: state.pages.peopleChildren
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPage, getPageChildren
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(People)