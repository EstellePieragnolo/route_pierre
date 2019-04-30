import React from 'react';
import './_Header.scss';
import Menu from './Menu';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    displayMenu = () => {
        if (this.state.menuOpen === false) {
            this.setState({ menuOpen: true })
        } else {
            this.setState({ menuOpen: false })
        }
    }

    render() {
        return (
            <div className="navbar" onClick={this.displayMenu}>
                <div className="navbarHamburger">
                    <span />
                    <span />
                    <span />
                </div>
                <div className="navbarMenu">
                    {/* <div onClick={this.displayMenu} className="navbarMenuClose">X</div> */}
                    <Menu menuOpen={this.state.menuOpen}
                        closeButton={this.displayMenu}
                    />
                </div>
            </div>
        )
    }
}
