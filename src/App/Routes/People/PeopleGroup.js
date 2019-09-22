import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink, Link } from 'react-router-dom'

import { getPageChildren, clearLastChildren, PEOPLE } from '../../../actions'

import PersonCard from '../../components/widgets/PersonCard/PersonCard'

import './people-group.scss'

const slugs = ['faculty', 'staff', 'professors', 'graduates']

class PeopleGroup extends PureComponent {

    config = {
        hasNavBar: true,
        hasScrollBar: false,
        hasTitleBar: false
    }

    getActionType = (slug) => {
        switch(slug) {
            case 'faculty':     return PEOPLE.FACULTY   
            case 'staff':       return PEOPLE.STAFF     
            case 'graduates':   return PEOPLE.GRADUATES 
            case 'professors':  return PEOPLE.PROFESSORS
            default: return ''
        }
    }
    
    clearGroupData = (slug) => {
        this.props.clearLastChildren()
    }

    getGroupData = (slug) => {
        this.props.getPageChildren(
            this.getActionType(slug)
        )
    }

    componentWillMount() {
        const { slug, page } = this.props.match.params
        this.getGroupData(slug,page)
        this.props.context.updateStatus({...this.config})
    }

    componentWillUnmount() {
        this.clearGroupData()
    }

    renderNavLinks = (groups) => 
        groups.map((group, i) => 
            <NavLink key={i}
                className="nav-link"
                to={ '/people/' + group }
                activeClassName="active"
            >
                {group}
            </NavLink>
        )

    renderChildren = (children) => 
        children && children.length > 0 ?
        children.map((child,i) => 
            <Link key={i} className="person-card"
                to={ '/person/' + child.slug }
            >
                <PersonCard data={child} id={i} key={i} />
            </Link>
        ) : null

    render() {
        const { children } = this.props
        
        return (
            <div className="PeopleGroup">
                <div className="bg-img" />

                <div className="col-left">
                    <div className="nav-links">
                        {this.renderNavLinks(slugs)}
                    </div>
                </div>
                
                <div className="col-main scrollableContainer">
                    <div className="cards-container">
                        {this.renderChildren(children)}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        children: state.people.children
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPageChildren, 
        clearLastChildren
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PeopleGroup)