import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getPostsByCat } from '../../../../../actions'

import PageLayout from '../../../../components/pages/PageLayout';
import './recent-page.scss'

import layers from './layers'
import NewsSlider from './NewsSlider/newsSlider'

class Page extends PureComponent { 

    config = {
        offset: this.props.offset,
        speed: 0.2
    }

    componentWillMount() {
        this.props.getPostsByCat('NEWS')
    }

    render() {

        return (
            <PageLayout {...this.config} layers={layers}>
                <div className="Home-recentPage-title">
                    Recent News
                </div> 

                <NewsSlider news={this.props.data.news} />

                <Link to="/news">
                    <div className="
                        roundButton-filled 
                        Home-recentPage-seeMoreButton" >
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
        getPostsByCat
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Page);