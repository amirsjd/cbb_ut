import React from 'react';
import NewsSliderItem from './newsSliderItem'

const NewsSlider = (props) => {

    const renderNews = (news) => (
        news && news.length > 0 ?
        news.map((item, i) => (
            <NewsSliderItem key={i} data={item} />
        )) : null                                                       
    )

    return (
        <div className="NewsSlider" >
            {renderNews(props.news)} 
        </div>
    )
}

export default NewsSlider;