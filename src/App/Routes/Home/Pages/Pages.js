import React from 'react'
import DescPage from './DecsPage'
import RecentPage from './RecentPage'
import ToolsPage from './EventsPage'
import AboutPage from './AboutPage'
import Footer from '../../../components/widgets/Footer/footer'

const pageTitles = ['Welcome', 'Recent', 'Tools', 'About', 'CBB']
const pagesList = [DescPage, RecentPage, ToolsPage, AboutPage, Footer]

const Pages = (props) => 
    pagesList.map((Page, i) => (
        <Page offset={i} key={i} {...props}/>
    ))

export default Pages
export { pageTitles } 