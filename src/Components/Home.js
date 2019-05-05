import React from 'react';
import Logo from './Logos/Logo';
import Inspirations from './Inspirations';
import ShopCategories from './Shop/ShopCategories';
import PreFooter from './Footers/PreFooter';
import './_Home.scss';
import Header from './Header/Header';

export default class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <div className="homeNavbar">
          <Header />
        </div>
        <div className="homeHeader">
          <div className="homeHeaderContainer">
            <div className="homeHeaderContainerItems">
              <Logo height={'390px'} image="title" />
            </div>
            <div className="homeHeaderContainerSubtitle">
              <h3>Créations en taille pierre </h3>
              <h3>par Orianne & Louis</h3>
            </div>
          </div>
        </div>
        <div className="homeShop">
          <h2 className="homeShopTitle">Le magasin</h2>
          <ShopCategories />
          <Inspirations />
          <PreFooter />
        </div>
      </div >
    )
  }
}