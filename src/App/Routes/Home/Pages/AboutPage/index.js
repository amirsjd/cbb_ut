import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { getPage, PAGES } from '../../../../../actions'

import PageLayout from '../../../../components/widgets/Parallax/PageLayout'
import layers from './layers'

import './style.scss'

class Page extends PureComponent {

    config = {
        offset: this.props.offset,
        speed: 0
    }

    componentWillMount() { 
        this.props.getPage(PAGES.ABOUT)
    }

    render() {
        const { data } = this.props
        return (
            <PageLayout {...this.config} layers={layers}>
                <div className="about-page">
                    <div className="left-col">
                        <div className="title">
                            {data && data.title && data.title.rendered}
                        </div>
                        <div className="details">
                            <div dangerouslySetInnerHTML={{
                                __html: data && data.excerpt && data.excerpt.rendered
                            }} />
                        </div>
                        <Link to="/about">
                            <div className="roundButton">
                                About us
                            </div>
                        </Link>
                        <Link to="/contact">
                            <div className="roundButton-filled">
                                Contact
                            </div>
                        </Link>
                    </div>
                    <div className="col-right">
                        <img alt="" src="/assets/home/about.jpg" />
                    </div>
                </div>
            </PageLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.page.aboutPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPage
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)