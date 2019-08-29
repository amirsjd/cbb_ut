import React, { PureComponent } from 'react';
import PageLayout from '../PageLayout';

class Fragment2 extends PureComponent {

    state = {
        offset: 2,
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
                    backgroundImage: 'linear-gradient(#6EC6CA,#08979D)',
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
                <span onClick={() => this.props.setPlxProps('SCROLL',this.state.offset + 1)}>Some Content</span>
                TOOLS
            </PageLayout>
        );
    }
}

export default Fragment2;