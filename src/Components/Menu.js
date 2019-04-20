import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Menu extends React.Component {
    render() {
        return (
            <header className='Header-header'>

                <nav className='Header-nav'>
                    <p>
                        <NavLink
                            exact to='/'
                            className='Header-navLink'
                            activeClassName='Header-isActive'
                        >
                            Home
                    </NavLink>
                    </p>

                    <p>
                        <NavLink
                            to='/Shop/'
                            className='Header-navLink'
                            activeClassName='Header-isActive'
                        >
                            Shop
                    </NavLink>
                    </p>
                </nav>
            </header>
        )
    }
}
