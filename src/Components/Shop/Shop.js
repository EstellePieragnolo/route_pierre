import React from 'react';
import ShopItem from './ShopItem';
import './_Shop.scss';

export default class Shop extends React.Component {

    render() {
        return (
            <div className="shopContainer">
                <h2 className="shopContainerTitle">Le Magasin</h2>
                <ShopItem />
            </div>
        );

    }
}
