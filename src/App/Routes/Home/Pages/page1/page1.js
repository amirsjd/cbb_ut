import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { newsList as getNews } from '../../../../../actions'
import NewsSlider from '../../../../components/sliders/NewsSlider/NewsSlider'

import PageLayout from '../PageLayout';

class Page extends PureComponent {

    config = {
        offset: 1,
        speed: 0.2
    }

    layers = [ 
        {
            speed: 0,
            offset: this.config.offset,
            style: {
                height: '100vh',
                width: '100vw',
                backgroundImage: 'linear-gradient(#8474A1,#6EC6CA)',
                opacity: 1
            }
        },
    ]

    componentWillMount() {
        this.props.getNews()
    }

    render() {

        console.log(this.props.data.news)

        return (
            <PageLayout {...this.config} layers={this.layers}>
                <div onClick={() => this.props.setPlxProps('SCROLL',this.state.offset + 1)}>Scroll Down</div>
                <div className="Title">Recent News</div> 
                <NewsSlider news={this.props.data.news} />
                <div className="ViewMoreNews">View More</div> 
            </PageLayout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.news
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getNews
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Page);