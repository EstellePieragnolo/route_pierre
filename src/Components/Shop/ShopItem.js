import React from 'react';
import './_ShopItem.scss';

export default class ShopItem extends React.Component {

    render() {
        return (
            <div className="shopItem">
                <div className="shopItemImage">
                    <img src={this.props.image} alt="shopCategories" width="360" />
                </div>
                <div className="shopItemInfo">
                    <p className="shopItemInfoName">{this.props.name}</p>
                    <p className="shopItemInfoPrice">Prix: {this.props.price} €</p>
                </div>
            </div>
        );

    }
}

