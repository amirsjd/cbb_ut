import React, { PureComponent } from 'react'
//import { Transition, animated } from 'react-spring/renderprops'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import './home.scss'

import Share from '../../components/widgets/Share/share'
import Footer from '../../components/bars/Footer/footer'

import Welcome from './Pages/page0/page0'
import RecentNews from './Pages/page1/page1'
import Tools from './Pages/page2/page2'
import Slide from './Pages/page3/page3'


const pageTitles = ['Welcome', 'Recent', 'Tools', 'Slide', 'CBB']
const pagesList = [Welcome, RecentNews, Tools, Slide]

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
        percentage: 0
    }

    handleScroll = () => {
        const scrollTop = this.parallax.current
        const pageHeight = this.parallax.space
        const pageTop = scrollTop % pageHeight

        const pageIndex = Math.ceil( scrollTop / pageHeight )
        const percentage = pageTop / pageHeight

        if(pageIndex !== this.status.pageIndex) {
            const isScrolled = scrollTop? true : false
            const pageTitle = pageTitles[pageIndex]
            
            this.status = { ...this.status, pageIndex }
            this.status = { ...this.status, pageTitle }
            this.status = { ...this.status, isScrolled }
        }

        this.status = { ...this.status, percentage }

        this.props.context.updateStatus({
            ...this.props.context.state.status, 
            ...this.status, ...this.config
        })
    }

    setPlxProps = (action, args) => {
        switch(action) {
            case 'SCROLL': 
                this.parallax.scrollTo(args)
                break
            default: return this.parallax
        }
    }

    componentWillMount() {
        
        this.props.context.updateStatus({
            ...this.config, ...this.status,
            setPlxProps: this.setPlxProps,
        })
    }

    componentDidMount() {
        this.parallax.container
        .addEventListener('scroll', () => 
            this.handleScroll()
        )
    }

    renderPages = () => {
        const props = { 
            setPlxProps: this.setPlxProps, 
            //percentage: this.status.percentage
        }
        return pagesList.map((Page, i) => (
            <Page offset={i} key={i} {...props}/>
        ))
    }

    render() {
        return (
            <div className="Home">
                
                <Parallax
                    className="HomePlx"
                    ref={ref => this.parallax = ref}
                    pages={this.config.pages}
                    vertical
                    scrolling={true}
                    style={{
                        width: '100vw',
                        position: 'relative'
                    }}>

                        {this.renderPages()}

                        <ParallaxLayer offset={5}>
                            <Footer />
                        </ParallaxLayer>

                </Parallax>

                <Share />

            </div>
        )
    }
}

export default Home