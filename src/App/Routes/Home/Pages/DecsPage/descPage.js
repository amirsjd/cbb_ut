import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
        
        const { scrollTo } = this.props
        const info = this.props.data.info

        return (
            <PageLayout {...this.config} layers={layers} >

                <div className="Home-descPage-content" >
                    <div className="text">
                        <div className="title">
                            {info && this.parseToText(info.name)}
                        </div>
                        <div className="desc">
                            {info && this.parseToText(info.description)}
                        </div>
                    </div>

                    <div className="
                        roundButton-outline 
                        Home-descPage-learnMoreButton" >
                        Learn More
                    </div>
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