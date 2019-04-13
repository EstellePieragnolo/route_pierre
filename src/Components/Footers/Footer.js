import React from 'react';
import './_Footer.scss';

export default class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <p className="footerCopyright">©2019 laroutedelapierre</p>
                <p className="footerAuthor">By Estelle Pieragnolo</p>
            </div>
        )
    }
}