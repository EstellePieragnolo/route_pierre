import React from 'react';
import Logo from './Logo';
import './_Home.scss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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
          <div className="homeShopItems">
            <Query query={items}>
              {({ data, loading, error }) => {
                if (loading) return 'Loading';
                if (error) return <p>ERROR</p>;
                return (
                  data.introShops &&
                  data.introShops.map(introShop => {
                    return <div key={introShop.id}>
                      {
                        introShop.image &&
                        <img src={introShop.image.url} alt="shopCategories" width="360" />
                      }
                      <div className="homeShopItemsHover">
                        <p>{introShop.category}</p>
                      </div>
                    </div>
                  })

                );
              }}
            </Query>
          </div>
        </div>
      </div >
    )
  }
}

export const items = gql`
query {
  introShops {
    id,
    category,
    image {
      url
    }
  }
}
`