import React, { Component } from 'react';

class Page extends Component {
    render() {
        return (
            <div className="groups">
                {this.renderGroups(children)}
                
                <div className="description"
                    dangerouslySetInnerHTML={{
                        __html: data && data.content? 
                            data.content.rendered 
                            : 
                            null
                        }}>
                </div>
            </div>
        );
    }
}

export default Page;