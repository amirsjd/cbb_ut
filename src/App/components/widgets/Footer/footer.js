import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { footerLinks as data, CURRENT_YEAR } from '../../../../static/config'

import PageLayout from '../../widgets/Parallax/PageLayout'
import './footer.scss'

import LinksGroup from './linksGroup'
//import GoogleMap from '../../widgets/GoogleMaps/GoogleMap'


class FooterPage extends Component {

    config = {
        offset: this.props.offset,
        speed: 0
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
                <div className="footer-page"> 
                    <div className="links-group">
                        {this.renderGroups()}
                    </div>
                    <div className="location">
                        <div className="map-container">
                            <div className="map"
                                style={{ backgroundImage: 'url("/assets/Home/maps.png")' }}
                            />
                            <span>
                                <i className="fas fa-search-location" />
                                <> - We are here </>
                            </span>
                        </div>
                        <div className="contact">
                            <header>Contact Us</header>
                            <span>Address: <b>{address}</b></span>
                            <span>Phone: <b>{phone}</b></span>
                            <span>Email: <b>{email}</b></span>
                            <span>Postal Code: <b>{postalCode}</b></span>
                        </div>
                    </div>
                    <div className="branding">
                        <div className="copyright">
                            Copyright © {CURRENT_YEAR} University of Tehran Bioinformatics Department
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