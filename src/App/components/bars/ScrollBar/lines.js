import React from 'react'
import { Spring } from 'react-spring/renderprops'

const Lines = ({ pages, pageIndex }) => {
    let lines = []
    for(let i=-1; i<=pages; i++)
        lines = [...lines, i]
        
    return lines.map((line, i) => {
        const toggle = (pageIndex === line)
        return (
            <Spring key={i}
                from={{ width: 0 }}
                to={{
                    width: toggle? 24 : 6,
                    className: toggle? 'ScrollBar-currentPage' : 'ScrollBar-otherPages'
                }}>
                {(props) => (
                    <div className="ScrollBar-line" >
                        <svg height={8} width={props.width}>
                            <line className={props.className}
                                x1={0} y1={0} x2={props.width} y2={0} />
                        </svg>
                    </div>
                )}
            </Spring>
        )
    })
}

export default Lines