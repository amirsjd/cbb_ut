import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'

import { getPageChildren, clearLastChildren, PEOPLE } from '../../../actions'

import './people-group.scss'

class PeopleGroup extends PureComponent {

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
        const slug = this.props.match.params.slug
        this.getGroupData(slug)
    }

    componentWillUpdate(nextProps) {
        const slug = nextProps.match.params.slug
        console.log(slug)
        
        if(this.props.match.params.slug !== slug) {
            this.clearGroupData()
            this.getGroupData(slug)
        }
    }

    renderNavLinks = (groups) => 
        groups.map((group, i) => 
            <NavLink key={i}
                className="nav-link"
                to={'/people/' + group}
                activeClassName="active">

                {group}
            </NavLink>
        )

    render() {

        const slugs = ['faculty', 'staff', 'professors', 'graduates']
        
        return (
            <div className="PeopleGroup">
                <div style={{marginTop:100}}>
                    {this.renderNavLinks(slugs)}
                </div>
                <div>
                    {this.props.match.params.slug}

                    {console.log(this.props.children)}
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