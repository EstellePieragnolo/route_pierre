import React from 'react';
import Logo from './Logo';
import Inspirations from './Inspirations';
import ShopCategories from './Shop/ShopCategories';
import './_Home.scss';

export default class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <div className="homeHeader">
          <div className="homeHeaderItems">
            <div className="homeHeaderItemsLogo"><Logo /></div>
            <h1 className="homeHeaderItemsTitle">LA ROUTE DE LA PIERRE</h1>
          </div>
          <div className="homeHeaderSubtitle">
            <h3>Créations en taille pierre </h3>
            <h3>par Orianne & Louis</h3>
          </div>
        </div>
        <div className="homeShop">
          <h2 className="homeShopTitle">Le magasin</h2>
          <ShopCategories />

          <Inspirations />

        </div>
      </div >
    )
  }
}