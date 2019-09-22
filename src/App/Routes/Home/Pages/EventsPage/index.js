import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Transition, config as springConfig } from 'react-spring/renderprops'

import { getPostsByCat, CATEGORIES } from '../../../../../actions'

import PageLayout from '../../../../components/widgets/Parallax/PageLayout'
import layers from './layers'

import './style.scss'

const PER_PAGE = 5

class Page extends PureComponent {

    toDown = true

    config = {
        offset: this.props.offset,
        speed: 0
    }

    state = {
        index: 0
    }

    handlePrev = () => {
        this.toDown = false
        const { data } = this.props
        const { index } = this.state
        this.setState({ 
            index: data && (index !== 0 ? index - 1 : data.length - 1)
        })
    }

    handleNext = () => {
        this.toDown = true
        const { data } = this.props
        const { index } = this.state
        this.setState({ 
            index : data && (index + 1 !== data.length ? index + 1 : 0)
        })
    }

    componentWillMount() { 
        this.props.getPostsByCat(CATEGORIES.EVENTS,1,PER_PAGE)
    }

    renderPosts = () => {
        const { data } = this.props
        const { index } = this.state

        return data && data.length > 0 && data.map((item,i) => 
            <Transition key={i}
                config={springConfig.slow}
                items={(i === index)}
                from={{ opacity: 0, top: (this.toDown? -300 : 300) }}
                enter={{ opacity: 1, top: 0 }}
                leave={{ opacity: 0, top: (this.toDown? 300 : -300) }}>
                {show => show && (props => 
                    <div 
                        className="slider-item "
                        style={props}
                        id={item.id}
                    >
                        <div className="title"
                            dangerouslySetInnerHTML={{
                                __html: item.title.rendered
                            }}
                        />
                        <div className="details"
                            dangerouslySetInnerHTML={{
                                __html: item.excerpt.rendered
                            }}
                        />
                    </div>
                )}
            </Transition>
        )
    }

    render() {
        return (
            <PageLayout {...this.config} 
                layers={layers} >

                <div className="toolsPage">
                    <div className="slider-container">
                        <div 
                            onClick={this.handlePrev} 
                            className="slider-button roundButton-filled"
                        >
                            <i className="fas fa-angle-left"/>
                        </div>

                        <div className="slider-content">
                            {this.renderPosts()}
                        </div>

                        <div 
                            onClick={this.handleNext} 
                            className="slider-button roundButton-filled"
                        >
                            <i className="fas fa-angle-right"/>
                        </div>
                    </div>
                </div>
            </PageLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.posts.events
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostsByCat
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)