import React, { PureComponent } from 'react';
import { Spring, animated } from 'react-spring/renderprops'

import './scroll-bar.scss'

class ScrollBar extends PureComponent {

    state = {
        pages: this.props.pages,
        pageIndex: this.props.pageIndex
    }

    renderLines = ({ pages, pageIndex }) => {
        var lines = []
        for(let i=-1; i<=pages; i++)
            lines = [...lines, i]

        return lines.map((line, i) => {
            const toggle = pageIndex === line ? true : false
            return (
                <Spring key={i}
                    from={{ width: 0 }}
                    to={{
                        width: toggle? 24 : 6,
                        className: toggle? 'CurrentPage' : 'OtherPages'
                    }}>
                    {(props) => (
                        <animated.div className="Line" style={{ marginTop: window.innerHeight / 50 }}>
                            <animated.svg height={5} width={props.width}>
                                <animated.line x1={0} y1={0} x2={props.width} y2={0} className={`${props.className}`} />
                            </animated.svg>
                        </animated.div>
                    )}
                </Spring>
            )
        })
    }

    render() {

        const {
            pages, pageIndex, setPlxProps, 
        } = this.props

        return (
            <div className="ScrollBar">
                <div 
                    className="ScrollArrow" 
                    onClick={() => setPlxProps('SCROLL', pageIndex - 1)}
                    style={{ visibility: pageIndex > 0? 'visible' : 'hidden' }}>

                    <i className="fas fa-sort-up" />
                </div>
                <span className="Number">0{pageIndex + 1}</span>
                <div 
                    className="ScrollArrow"
                    onClick={() => setPlxProps('SCROLL', pageIndex + 1)}
                    style={{ visibility: pageIndex+1 < pages? 'visible' : 'hidden' }}>
                        
                    <i className="fas fa-sort-down" />
                </div>
                {this.renderLines({ pages, pageIndex })}

            </div>
        )
    }
}

export default ScrollBar;