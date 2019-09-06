import React, { Component } from 'react'

import LayoutProvider, { LayoutContext } from './LayoutProvider'

import NavBar from './bars/NavBar/navBar'
import ScrollBar from './bars/ScrollBar/scrollBar'
import TitleBar from './bars/TitleBar/titleBar'

class Layout extends Component {


    render() {
        return (
            <LayoutProvider>

                {this.props.children} 

                <LayoutContext.Consumer>
                    {(context) => {

                        const { 
                            hasNavBar, hasScrollBar, hasTitleBar,
                            pages, pageIndex, pageTitle, isScrolled,
                            scrollTo, 
                        } = context.state.status

                        return (
                            <>
                                {hasNavBar &&
                                <NavBar isScrolled={isScrolled} />}

                                {hasScrollBar && 
                                <ScrollBar 
                                    pages={pages} 
                                    pageIndex={pageIndex}
                                    scrollTo={scrollTo} />}

                                {hasTitleBar && 
                                <TitleBar pageTitle={pageTitle} />}
                            </>
                        )
                    }}
                </LayoutContext.Consumer>
            </LayoutProvider>
        )
    }
}

export default Layout;