import React, { PureComponent } from 'react'
import { Parallax } from 'react-spring/renderprops-addons'

import './home.scss'

import Pages, { pageTitles } from './Pages/Pages'
import Share from '../../components/widgets/Share/share' 

class Home extends PureComponent {

    config = {
        hasNavBar: true, 
        hasTitleBar: true,
        hasScrollBar: true,
        pages: 5
    }

    status = {
        pageIndex: 0,
        pageTitle: 'Welcome',
        isScrolled: false,
        //percentage: 0,
    }

    handleScroll = () => {

        const scrollTop = this.parallax.current
        const pageHeight = this.parallax.space

        const pageIndex = Math.ceil( scrollTop / pageHeight )

        if(pageIndex !== this.status.pageIndex) {
            const isScrolled = scrollTop? true : false
            const pageTitle = pageTitles[pageIndex]
            
            this.status = { 
                ...this.status, 
                pageIndex, 
                pageTitle, 
                isScrolled 
            }
        }

        this.props.context.updateStatus({
            ...this.props.context.state.status, 
            ...this.status
        })
    }

    scrollTo = (page) => this.parallax.scrollTo(page)

    componentWillMount() {
        
        this.props.context.updateStatus({
            ...this.config, ...this.status,
            scrollTo: this.scrollTo
        })
    }

    componentDidMount() {
        
        this.parallax.container
        .addEventListener('scroll', () => 
            this.handleScroll()
        )
    }

    render() {
        return (
            <div className="Home">
                
                <Parallax
                    className="parallax scrollableContainer"
                    ref={ref => this.parallax = ref}
                    pages={this.config.pages}
                    vertical
                    scrolling={true}>

                        <Pages 
                            {...this.config} 
                            {...this.status}
                            scrollTo={this.scrollTo} />

                </Parallax>

                <Share />

            </div>
        )
    }
}


export default Home