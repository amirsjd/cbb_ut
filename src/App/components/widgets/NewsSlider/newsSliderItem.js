import React from 'react';

const NewsSliderItem = (props) => {
    const { title , content } = props.data
    
    return (
        <div className="NewsSliderItem">
            <div className="NewsSliderItem-title">
                {title.rendered}
            </div>
            <div 
                className="NewsSliderItem-content"
                dangerouslySetInnerHTML={{ __html: content.rendered}} />
        </div>
    )
}

export default NewsSliderItem

// add cover image instead of content image 
// to do that add getMedia() action + redux in here
// change content with excerpt then
