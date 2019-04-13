import React from 'react';
import './_Footer.scss';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="footerContainer">
                    <p className="ContainerCopyright">©2019 laroutedelapierre</p>
                    <p className="ContainerAuthor">By Estelle Pieragnolo</p>
                </div>
            </div>
        )
    }
}