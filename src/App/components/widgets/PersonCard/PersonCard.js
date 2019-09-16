import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMedia } from '../../../../actions'

import './person-card.scss'

class PersonCard extends Component {

    state = {
        avatar: ''
    }

    componentWillMount() {

        const id = this.props.data.featured_media
        id && this.props.getMedia(id)
    }

    componentWillReceiveProps(newProps) {
        const { media } = newProps

        media && media.payload.then(res =>
            this.setState({ 
                avatar: res.media_details.sizes.thumbnail.source_url 
            })
        )
    }

    render() {

        const { 
            data, className, style, id
        } = this.props

        const { avatar } = this.state

        return (
            <div style={style}
                className={
                    "PersonCard " +
                    className
                } 
            >
                <div className={`header header-${id+1}`}>
                    <span>{id+1}</span>

                    <img src={avatar} alt=""/>

                    <div className="title">
                        {data.title.rendered}
                    </div>
                </div>
                
                <div className="details"
                    dangerouslySetInnerHTML={{
                        __html: data.content.rendered
                    }} 
                />
                
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        media: state.media.find(x => x.id === ownProps.data.featured_media)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getMedia
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonCard)