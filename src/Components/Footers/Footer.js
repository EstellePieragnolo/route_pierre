import React from 'react';
import './_Footer.scss';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="footerContainer">
                    <p className="footerContainerCopyright">©2019 laroutedelapierre</p>
                    <p className="footerContainerAuthor">By Estelle Pieragnolo</p>
                </div>
            </div>
        )
    }
}