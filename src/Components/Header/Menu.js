import React from 'react';
import { Routes } from '../paths';
import { Link } from 'react-router-dom';
import './_Menu.scss';

export default class Menu extends React.Component {
    render() {
        return (
            <div className={'menu' + (
                this.props.menuOpen === true ? 'Open' : 'False'
            )}>
                <div className="menuOpenClose"></div>
                <div className="menuOpenContainer">
                    <h2>Menu</h2>

                    <div className="menuOpenContainerItems">
                        <p className="menuOpenContainerItemsCategory">
                            <Link to={Routes.ROOT}>
                                Home
        </Link>
                        </p>

                        <p className="menuOpenContainerItemsCategory">
                            <Link to={Routes.SHOP}>
                                Shop
        </Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
