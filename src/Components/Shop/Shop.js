import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ShopItem from './ShopItem';
import './_Shop.scss';
import ShopFilters from './ShopFilters';

export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    filters = (category) => () => {
        if (this.state.filter !== category) {
            this.setState({
                filter: category
            })
            return this.state.filter

        } else if (this.state.filter === category) {
            this.setState({
                filter: ''
            })
            return this.state.filter
        }
    }

    render() {
        return (
            <div className="shopContainer">
                <h2 className="shopContainerTitle">Le Magasin</h2>

                <div className="shopContainerFilters">
                    <ShopFilters filter={this.filters} />
                </div>

                <div className="shopContainerItems">

                    <Query query={items}>
                        {({ data, loading, error }) => {
                            if (loading) return 'Loading';
                            if (error) return <p>ERROR</p>;
                            return (
                                data.creations &&
                                data.creations.map(creation => {
                                    if (this.state.filter === '') {
                                        return (
                                            creation.picture &&
                                            <ShopItem image={creation.picture.url}
                                                name={creation.name}
                                                price={creation.price}
                                            />
                                        )
                                    }
                                    else if (this.state.filter === creation.category) {
                                        return (
                                            creation.picture &&
                                            <ShopItem image={creation.picture.url}
                                                name={creation.name}
                                                price={creation.price}
                                            />
                                        )
                                    }

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
            price,
            category
        }
    }
`

