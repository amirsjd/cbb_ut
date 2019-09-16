import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Slider from 'react-slick'

import { getPostsByCat, CATEGORIES } from '../../../../actions'

import NewsSliderItem from './newsSliderItem'

import './news-slider.scss'

class NewsSlider extends PureComponent {

    state = {
        currentSlide: 0
    }

    componentWillMount() {
        const {getPostsByCat, page, perPage} = this.props
        getPostsByCat(CATEGORIES.NEWS,page,perPage)
    }

    renderNews = (news) => (
        news && news.length > 0 ?
        news.map((item, i) => (
            <Link to={'/news/'+item.id} key={i} >
                <NewsSliderItem data={item} />
            </Link>
        )) : null                                                 
    )
    
    render() {
        const news = this.props.data.news

        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 2,
            //centerMode: true,
            //centerPadding: "60px",
            className: "NewsSlider",
            swipeToSlide: true,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            ref: slider => this.slider = slider,
            beforeChange: (prev, next) => {
                this.setState({ currentSlide: next })
            },
            appendDots: dots => (
                <div>
                  <ul>
                    {dots}
                  </ul>
                </div>
            ),
            customPaging: i => (
                <div key={i}
                    className="slider-dot"
                    style={
                        i === this.state.currentSlide/2 ?
                        { color: 'rgba(255,255,255,1)' } :
                        { color: 'rgba(22,22,22,0.55)' }
                    }
                >
                    •
                </div>
            ),
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                }
            ]
        }

        return (
            <Slider {...settings} >
                {this.renderNews(news)} 
            </Slider>
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