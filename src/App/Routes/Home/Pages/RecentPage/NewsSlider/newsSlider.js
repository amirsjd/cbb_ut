import React from 'react';
import { Link } from 'react-router-dom'

import NewsSliderItem from './newsSliderItem'

import './news-slider.scss'

const NewsSlider = (props) => {

    const renderNews = (news) => (
        news && news.length > 0 ?
        news.map((item, i) => (
            <Link to={`/news/${item.id}`} key={i} >
                <NewsSliderItem data={item} />
            </Link>
        )) : null                                                       
    )

    return (
        <div className="NewsSlider" >
            {renderNews(props.news)} 
        </div>
    )
}

export default NewsSlider;