import React from 'react'
import { Spring, animated } from 'react-spring/renderprops'

const Lines = ({ pages, pageIndex }) => {
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
                    className: toggle? 'ScrollBar-currentPage' : 'ScrollBar-otherPages'
                }}>
                {(props) => (
                    <animated.div className="ScrollBar-line" style={{ marginTop: window.innerHeight / 50 }}>
                        <animated.svg height={5} width={props.width}>
                            <animated.line x1={0} y1={0} x2={props.width} y2={0} className={`${props.className}`} />
                        </animated.svg>
                    </animated.div>
                )}
            </Spring>
        )
    })
}

export default Lines