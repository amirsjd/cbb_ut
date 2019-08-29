import React, { Component } from 'react';

import './share.scss'

class Share extends Component {

    state = {
        links: [
            {
                icon: 'instagram',
                name: 'Instagram',
                link: 'https://instagram.com'
            },
            {
                icon: 'github',
                name: 'Github',
                link: 'https://github.com'
            },
            {
                icon: 'linkedin',
                name: 'Linkedin',
                link: 'https://linkedin.com'
            }
        ]
    }
    renderLinks() {
        return this.state.links.map((item,i) => (
            <div className="SocialMedia" key={i}>
                <a href={item.link}>
                    <i className={`fab fa-${item.icon}`} />
                </a>
            </div>
        ))
    }

    render() {
        return (
            <div className="Share">
                {this.renderLinks()}
            </div>
        );
    }
}

export default Share;