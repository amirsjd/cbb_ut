import React from 'react';

const PageIndicator = (props) => {

    const {
        pages, pageIndex, setPlxProps: set, 
    } = props

    const c = pageIndex + 1

    return (
        <>
            <div 
                className="ScrollBar-arrow" 
                onClick={() => set('SCROLL',  c === pages? 0: c-2)}
                style={{ visibility: pageIndex > 0? 'visible' : 'hidden' }}>

                <i className="fas fa-sort-up" />
            </div>

            <span className="ScrollBar-number">0{c}</span>

            <div 
                className="ScrollBar-arrow"
                onClick={() => set('SCROLL', c)}
                style={{ visibility: c < pages? 'visible' : 'hidden' }}>

                <i className="fas fa-sort-down" />
            </div>
        </>
    )
}

export default PageIndicator;