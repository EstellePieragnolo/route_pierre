import React from "react";
import Inspirations from "./Inspirations";
import ShopCategories from "./Shop/ShopCategories";
import PreFooter from "./Footers/PreFooter";
import "./_Home.scss";
import Header from "./Header/Header";
import logo from "../img/logo.svg";

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
              <img src={logo} alt="logo" />
              <h1>LA ROUTE DE LA PIERRE</h1>
            </div>
            <div className="homeHeaderContainerSubtitle">
              <h3>Créations en taille pierre <br/> par Orianne & Louis</h3>
            </div>
          </div>
        </div>
        <div className="homeShop">
          <h2 className="homeShopTitle">Le magasin</h2>
          <ShopCategories />
          <Inspirations />
          <PreFooter />
        </div>
      </div>
    );
  }
}
