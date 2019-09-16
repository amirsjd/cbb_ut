import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Transition, config as springConfig } from 'react-spring/renderprops'

import { getPage, getPageChildren, PAGES } from '../../../../../actions'

import PageLayout from '../../../../components/widgets/Parallax/PageLayout'

import './styles.scss'
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
            return (
                <Transition
                    config={springConfig.molasses}
                    items={children} keys={child => child.id}
                    trail={250}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}>
                        
                    {child => props => (
                        <Link to={'/people/' + child.slug} key={child.id}>
                            <div className="group-banner" style={props}>
                                <div dangerouslySetInnerHTML={{
                                    __html: child.content.rendered
                                }} />
                                <p>{child.title.rendered}</p>
                            </div>
                        </Link>
                    )}
                </Transition>
            )
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