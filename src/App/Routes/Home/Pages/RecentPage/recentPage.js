import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

import PageLayout from '../../../../components/pages/PageLayout';
import './recent-page.scss'

import layers from './layers'
import NewsSlider from '../../../../components/widgets/NewsSlider/newsSlider'

class Page extends PureComponent { 

    config = {
        offset: this.props.offset,
        speed: 0.2
    }



    render() {

        return (
            <PageLayout {...this.config} layers={layers}>
                <div className="Home-recentPage-title">
                    Recent News
                </div> 

                <NewsSlider page={1} perPage={8} />

                <Link to="/news">
                    <div className="
                        roundButton-filled 
                        Home-recentPage-seeMoreButton" >
                        View More
                    </div> 
                </Link>
            </PageLayout>
        )
    }
}


export default Page;