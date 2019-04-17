import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './_ShopItem.scss';

export default class ShopItem extends React.Component {

    render() {
        return (
            <div className="shop">
                <Query query={items}>
                    {({ data, loading, error }) => {
                        if (loading) return 'Loading';
                        if (error) return <p>ERROR</p>;
                        return (
                            data.creations &&
                            data.creations.map(creation => {
                                return (
                                    <div className="shopItem">
                                        {
                                            creation.picture &&
                                            <div className="shopItemContainer">
                                                <div key={creation.id} className="shopItemContainerImage">
                                                    <img src={creation.picture.url} alt="shopCategories" width="360" />
                                                </div>

                                                <div className="shopItemContainerInfo">
                                                    <p className="shopItemContainerInfoName">{creation.name}</p>
                                                    <p className="shopItemContainerInfoPrice">Prix: {creation.price} €</p>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                )

                            })

                        );
                    }}
                </Query>
                <i aria="hidden" />
                <i aria="hidden" />
            </div>
        );

    }
}

export const items = gql`
    query {
        creations {
            name,
            picture {
                url
            },
            price
        }
    }
`

