import React from 'react';

const PageIndicator = (props) => {

    const {
        pages, pageIndex, scrollTo: set, 
    } = props

    const c = pageIndex + 1
    var num = c.toLocaleString('en-US', {
        minimumIntegerDigits: 2, 
        useGrouping:false
    })

    return (
        <>
            <div 
                className="ScrollBar-arrow" 
                onClick={() => set(c === pages? 0: c-2)}
                style={{ visibility: pageIndex > 0? 'visible' : 'hidden' }}>

                <i className="fas fa-sort-up" />
            </div>

            <span className="ScrollBar-number">{num}</span>

            <div 
                className="ScrollBar-arrow"
                onClick={() => set(c)}
                style={{ visibility: c < pages? 'visible' : 'hidden' }}>

                <i className="fas fa-sort-down" />
            </div>
        </>
    )
}

export default PageIndicator;