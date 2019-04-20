import React from 'react';
import Logo from './Logo';
import Inspirations from './Inspirations';
import ShopCategories from './Shop/ShopCategories';
import Footer from './Footers/Footer';
import PreFooter from './Footers/PreFooter';
import './_Home.scss';
import Menu from './Header/Menu';
import Header from './Header/Header';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopCategory: ''
    }
  }

  shopCategory = (category) => () => {
    if (this.state.shopCategory !== category) {
      this.setState({
        shopCategory: category
      })
      return this.state.shopCategory

    } else if (this.state.shopCategory === category) {
      this.setState({
        shopCategory: ''
      })
      return this.state.shopCategory
    }
  }

  render() {
    return (
      <div className="home">
        <Header />
        <div className="homeHeader">
          <div className="homeHeaderItems">
            <div className="homeHeaderItemsLogo"><Logo height={'390px'} /></div>
            <h1 className="homeHeaderItemsTitle">LA ROUTE DE LA PIERRE</h1>
          </div>
          <div className="homeHeaderSubtitle">
            <h3>Créations en taille pierre </h3>
            <h3>par Orianne & Louis</h3>
          </div>
        </div>
        <div className="homeShop">
          <h2 className="homeShopTitle">Le magasin</h2>
          <ShopCategories shopCategory={this.shopCategory} />
          <Inspirations />
          <PreFooter />
          <Footer />
        </div>
      </div >
    )
  }
}