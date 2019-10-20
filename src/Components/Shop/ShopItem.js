import React from 'react';
import { Routes } from '../paths';
import { Link } from 'react-router-dom';
import { ModuleUtils } from '../../Modules/ModuleUtils';
import './_ShopItem.scss';

export default class ShopItem extends React.Component {

    render() {
        return (
            <Link to={ModuleUtils.getUrlFromPath(
                Routes.NOTICE,
                { id: this.props.id }
            )} target='_blank'>
                <div className="shopItem">
                    <div className="shopItemImage">
                        <img src={this.props.image} alt="shopCategories" />
                    </div>
                    <div className="shopItemInfo">
                        <p className="shopItemInfoName">{this.props.name}</p>
                        <p className="shopItemInfoPrice">Prix: {this.props.price} €</p>
                    </div>
                </div>
            </Link>
        );

    }
}

