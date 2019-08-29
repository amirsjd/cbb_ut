import React, { Component } from 'react'

import './Layout.scss'
import LayoutProvider, { LayoutContext } from './LayoutProvider'

import NavBar from './bars/NavBar/navBar'
import ScrollBar from './bars/ScrollBar/scrollBar'
import TitleBar from './bars/TitleBar/titleBar'

class Layout extends Component {


    render() {

        return (
            <div className="Layout">

                <LayoutProvider>
                    <div className="Layout-content">
                        {this.props.children} 
                    </div>

                    <LayoutContext.Consumer>
                        {(context) => {

                            const { 
                                hasNavBar, hasScrollBar, hasTitleBar,
                                pages, pageIndex, pageTitle, isScrolled,
                                setPlxProps, 
                            } = context.state.status

                            return (
                                <>
                                    {hasNavBar &&
                                    <NavBar isScrolled={isScrolled} />}

                                    {hasScrollBar && 
                                    <ScrollBar 
                                        pages={pages} 
                                        pageIndex={pageIndex}
                                        setPlxProps={setPlxProps} />}

                                    {hasTitleBar && 
                                    <TitleBar pageTitle={pageTitle} />}
                                </>
                            )
                        }}
                    </LayoutContext.Consumer>
                </LayoutProvider>
            </div>
        )
    }
}

export default Layout;