import React, { PureComponent } from 'react';
import PageLayout from '../PageLayout';

class ContentGroup3 extends PureComponent {

    state = {
        offset: 3,
        speed: 0.2
    }

    render() {
        const backgroundLayers = [
            {
                speed: 0,
                offset: this.state.offset,
                style: {
                    height: '100vh',
                    width: '100vw',
                    backgroundImage: 'linear-gradient(#08979D,#8474A1)',
                    opacity: 1
                },
                imgStyle: {
                    top: '100px',
                    left: '100px'
                }
            },
            {
                img: '',
                speed: 0.5,
                offset: this.state.offset + 0.5
            }
        ]

        return (
            <PageLayout {...this.state} layers={backgroundLayers}>
                <span onClick={() => this.props.setPlxProps('SCROLL', 0)}>Some Content</span>
            </PageLayout>
        );
    }
}

export default ContentGroup3;