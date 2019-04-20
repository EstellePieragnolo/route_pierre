import React from 'react';
import { Routes } from '../paths';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <Link to={Routes.ROOT}>
                        Home
                        </Link>
                </p>

                <p>
                    <Link to={Routes.SHOP}>
                        Shop
                        </Link>
                </p>
            </div>
        )
    }
}
