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
                    <h2 className="menuOpenContainerTitle">Menu</h2>

                    <div className="menuOpenContainerItems">
                        <p className="menuOpenContainerItemsCategory">
                            <Link to={Routes.ROOT}>
                                Accueil
        </Link>
                        </p>

                        <p className="menuOpenContainerItemsCategory">
                            <Link to={Routes.SHOP}>
                                Le magasin
        </Link>
                        </p>
                        <p className="menuOpenContainerItemsCategory">Inspiration et démarche</p>
                        <p className="menuOpenContainerItemsCategory">Qui sommes-nous</p>
                        <p className="menuOpenContainerItemsCategory">Contact</p>
                    </div>
                </div>
            </div>
        )
    }
}
