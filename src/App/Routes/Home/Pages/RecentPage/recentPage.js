import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getPostsByCats } from '../../../../../actions'

import PageLayout from '../../../../components/pages/PageLayout';
import './recent-page.scss'

import layers from './layers'
import NewsSlider from './NewsSlider/newsSlider'

class Page extends PureComponent { 

    config = {
        offset: 1,
        speed: 0.2
    }

    componentWillMount() {
        this.props.getPostsByCats(['NEWS'])
    }

    render() {

        return (
            <PageLayout {...this.config} layers={layers}>
                <div className="Home-recentPage-title">
                    Recent News
                </div> 

                <NewsSlider news={this.props.data.posts} />

                <Link to="/news">
                    <div className="roundButton Home-recentPage-seeMoreButton">
                        View More
                    </div> 
                </Link>
            </PageLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostsByCats
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Page);