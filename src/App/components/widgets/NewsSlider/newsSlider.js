import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { getPostsByCat, CATEGORIES } from '../../../../../../actions'

import NewsSliderItem from './newsSliderItem'

import './news-slider.scss'

class NewsSlider extends PureComponent {

    componentWillMount() {
        const {getPostsByCat, page, perPage} = this.props
        getPostsByCat(CATEGORIES.NEWS,page,perPage)
    }

    renderNews = (news) => (
        news && news.length > 0 ?
        news.map((item, i) => (
            <Link to={`/news/${item.id}`} key={i} >
                <NewsSliderItem data={item} />
            </Link>
        )) : null                                                       
    )
    
    render() {
        const news = this.props.data.news

        console.log('did')
        return (
            <div className="NewsSlider scrollableContainer" >
                {this.renderNews(news)} 
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(NewsSlider)