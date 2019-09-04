import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import data from './config.json'

import PageLayout from '../PageLayout'
import './footer.scss'

import LinksGroup from './linksGroup'
//import GoogleMap from '../../widgets/GoogleMaps/GoogleMap'


class FooterPage extends Component {

    config = {
        offset: this.props.offset,
        speed: 0.1
    }

    renderGroups = () => 
        data.lists.map((group,i) => 
            <LinksGroup group={group} key={i} />
        )
    
    renderLinks = () =>
        data.links.map((link,i) => 
            <div key={i}>
                <span> | </span>
                <Link to={link.to} className="link" >
                    {link.title}
                </Link>
            </div>
        )

    render() {
        const { address, email, phone, postalCode } = data.contact
        return (
            <PageLayout {...this.config} >
                <div className="footerPage"> 
                    <div className="footerPage-linksGroup">
                        {this.renderGroups()}
                    </div>
                    <div className="footerPage-location">
                        <div className="footerPage-map">
                            <img alt="map" src="/assets/Home/maps.png" />
                        </div>
                        <div className="footerPage-contact">
                            <header>Contact Us</header>
                            <span>Address: <b>{address}</b></span>
                            <span>Phone: <b>{phone}</b></span>
                            <span>Email: <b>{email}</b></span>
                            <span>Postal Code: <b>{postalCode}</b></span>
                        </div>
                    </div>
                    <div className="footerPage-branding">
                        <div className="copyright">
                            Copyright © 2019 University of Tehran Bioinformatics Department
                        </div> 
                        <div className="links">
                            {this.renderLinks()}
                        </div>
                    </div>
                </div>
            </PageLayout>
        )
    }
}

export default FooterPage;