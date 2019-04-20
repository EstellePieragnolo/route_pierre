import React from 'react';
import './_Header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbarHamburger">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        )
    }
}
