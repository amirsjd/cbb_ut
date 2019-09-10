import React from 'react'

import DescPage from './DescPage/descPage'
import GroupsPage from './GroupsPage/groupsPage'

const pagesList = [ DescPage, GroupsPage ]

const Pages = (props) => 
    pagesList.map((Page, i) => 
        <Page offset={i} key={i} {...props}/>
    )

export default Pages