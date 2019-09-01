import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import './recent-page.scss'

import { getPostsList } from '../../../../../actions'
import NewsSlider from './NewsSlider/newsSlider'

import layers from './layers'
import PageLayout from '../../../../components/pages/PageLayout';

class Page extends PureComponent {

    config = {
        offset: 1,
        speed: 0.2
    }

    componentWillMount() {
        this.props.getPostsList('NEWS')
    }

    render() {

        return (
            <PageLayout {...this.config} layers={layers}>
                <div className="RecentPage-title">Recent News</div> 
                <NewsSlider news={this.props.data.news} />
                <div className="RecentPage-seeMoreButton">
                    <Link to="/news">View More</Link> 
                </div> 
            </PageLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.news
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getPostsList
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Page);