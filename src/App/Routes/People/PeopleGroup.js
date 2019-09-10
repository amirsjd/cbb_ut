import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getPageChildren, PEOPLE } from '../../../actions'

class PeopleGroup extends PureComponent {

    getActionType = (slug) => {
        switch(slug) {
            case 'faculty':     return PEOPLE.FACULTY
            case 'staff':       return PEOPLE.STAFF
            case 'graduates':   return PEOPLE.GRADUATES
            case 'professors':  return PEOPLE.PROFESSORS
            default: return []
        }
    }

    getGroupData = (slug) => console.log(slug)

    componentWillUnmount() {

    }

    render() {
        this.getGroupData(
            this.props.match.params.slug
        )
        
        return (
            <div>
                <div>
                    People Group
                    {this.props.location.pathname}
                </div>
                <div>
                    nav links
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        children: state.pages.peopleChildren
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPageChildren
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PeopleGroup)