import React from 'react';

const NewsSliderItem = (props) => {
    const { title, content } = props.data
    return (
        <div className="NewsSliderItem">
            {title} <br/> {content} 
        </div>
    )
}

export default NewsSliderItem;