import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default class ShopCategories extends React.Component {


    render() {
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
                                    <div className="homeShopCategoryItems">
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
    }
  }
}
`