import React from 'react';
import gql from 'graphql-tag';
import { Routes } from '../paths';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

export default class ShopCategories extends React.Component {


    render() {
        console.log(this.data)
        return (
            <div className="homeShopCategory">
                <Query query={items}>
                    {({ data, loading, error }) => {
                        if (loading) return 'Loading';
                        if (error) return <p>ERROR</p>;
                        return (
                            data.introShops &&
                            data.introShops.map(introShop => {
                                return (
                                    <Link to={Routes.SHOP}>
                                        <div className="homeShopCategoryItems" onClick={this.props.shopCategory(introShop.shopCategory)}>
                                            {
                                                introShop.image &&
                                                <div key={introShop.id} className="homeShopCategoryItemsImage">
                                                    <img src={introShop.image.url} alt="shopCategories" width="360" />
                                                </div>
                                            }
                                            <div className="homeShopCategoryItemsHover">
                                                <p>{introShop.category}</p>
                                            </div>

                                        </div>
                                    </Link>
                                )

                            })

                        );
                    }}
                </Query>
            </div>
        );
    }
}


export const items = gql`
query {
  introShops {
    id,
    category,
    image {
      url
    },
    shopCategory
  }
}
`