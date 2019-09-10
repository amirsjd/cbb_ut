import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getPage, getPageChildren, PAGES } from '../../../../../actions'

import PageLayout from '../../../../components/widgets/Parallax/PageLayout'

import './groups-page.scss'
import layers from './layers'

class Page extends Component {

    config = {
        offset: this.props.offset,
        speed: 0
    }

    componentWillMount() {
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
        const { data, children } = this.props

        return (
            <PageLayout {...this.config} layers={layers}>
                <div className="groups-page">
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
            </PageLayout>
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

export default connect(mapStateToProps,mapDispatchToProps)(Page)