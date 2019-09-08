import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { Transition, config as springConfig } from 'react-spring/renderprops'

import { getInfo } from '../../../../../actions'

import './desc-page.scss'
import PageLayout from '../../../../components/pages/PageLayout'
import layers from './layers'

class Page extends PureComponent {

    config = {
        offset: this.props.offset,
        speed: 0
    }

    scrollDown = (scrollTo) => scrollTo(this.config.offset + 1)

    componentWillMount() { 
        this.props.getInfo()
    }

    parseToText = (text) => 
        (new DOMParser()).parseFromString(
            '<!doctype html><body>' + text,
            'text/html'
        ).body.textContent

    render() {

        const { offset, pageIndex, scrollTo, data: { info } } = this.props

        const isActive = (offset === pageIndex)

        return (
            <PageLayout {...this.config} layers={layers} >

                <Transition
                    items={!isActive}
                    from={{ 
                        position: 'absolute',
                        width: '100vw', 
                        height: '100vh', 
                        backgroundImage: 'linear-gradient(black,black,black,transparent)',
                        opacity: 0
                    }}
                    enter={{ opacity: 0.5 }}
                    leave={{ opacity: 0 }}
                    config={springConfig.gentle}>

                    {show => show && (props => <div style={props}/>)}
                </Transition>

                <div className="Home-descPage-content" >
                    <div className="text">
                        <div className="title">
                            {info && this.parseToText(info.name)}
                        </div>
                        <div className="desc">
                            {info && this.parseToText(info.description)}
                        </div>
                    </div>

                    <Link to="/about">
                        <div className="
                            roundButton-outline 
                            Home-descPage-learnMoreButton" >
                            Learn More
                        </div>
                    </Link>
                </div>

                <div 
                    className="Home-descPage-scrollDownButton" 
                    onClick={() => this.scrollDown(scrollTo)}>

                    <span>Scroll Down</span>
                    <i className="fas fa-angle-down" />
                </div>
            </PageLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.info
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getInfo
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)