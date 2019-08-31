import React from 'react'
import DescPage from './DecsPage/descPage'
import RecentPage from './RecentPage/recentPage'
import ToolsPage from './ToolsPage/toolsPage'
import AboutPage from './AboutPage/aboutPage'
import Footer from '../../../components/pages/Footer/footer'

const pageTitles = ['Welcome', 'Recent', 'Tools', 'About', 'CBB']
const pagesList = [DescPage, RecentPage, ToolsPage, AboutPage, Footer]

const Pages = (props) => {
    return pagesList.map((Page, i) => (
        <Page offset={i} key={i} {...props}/>
    ))
}

export default Pages
export { pageTitles }