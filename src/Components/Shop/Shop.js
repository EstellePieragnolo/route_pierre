import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ShopItem from './ShopItem';
import './_Shop.scss';

export default class Shop extends React.Component {

    render() {
        return (
            <div className="shopContainer">
                <h2 className="shopContainerTitle">Le Magasin</h2>

                <div className="shopContainerItems">
                    <Query query={items}>
                        {({ data, loading, error }) => {
                            if (loading) return 'Loading';
                            if (error) return <p>ERROR</p>;
                            return (
                                data.creations &&
                                data.creations.map(creation => {
                                    return (
                                        creation.picture &&
                                        <ShopItem image={creation.picture.url}
                                            name={creation.name}
                                            price={creation.price}
                                        />
                                    )

                                })

                            );
                        }}
                    </Query>
                    <i aria="hidden" />
                    <i aria="hidden" />
                </div>

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

