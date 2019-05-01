import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ShopItem from './ShopItem';
import ShopFilters from './ShopFilters';
import Loader from '../Loader/Loader';
import './_Shop.scss';
import Header from '../Header/Header';

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
                <Header />
                <h2 className="shopContainerTitle">Le Magasin</h2>

                <div className="shopContainerFilters">
                    <ShopFilters filter={this.filters} selected={this.state.filter} />
                </div>

                <div className="shopContainerItems">

                    <Query query={items}>
                        {({ data, loading, error }) => {
                            if (loading) return <Loader />;
                            if (error) return <p>ERROR</p>;
                            return (
                                data.creations &&
                                data.creations.map(creation => {
                                    if (this.state.filter === '') {
                                        return (
                                            creation.picture &&
                                            <ShopItem
                                                id={creation.id}
                                                image={creation.picture.url}
                                                name={creation.name}
                                                price={creation.price}
                                            />
                                        )
                                    }
                                    else if (this.state.filter === creation.category) {
                                        return (
                                            creation.picture &&
                                            <ShopItem
                                                id={creation.id}
                                                image={creation.picture.url}
                                                name={creation.name}
                                                price={creation.price}
                                            />
                                        )
                                    }

                                })

                            );
                        }}
                    </Query>

                    <i aria-hidden="true" />
                    <i aria-hidden="true" />
                </div>

            </div>
        );

    }
}

export const items = gql`
    query {
        creations {
            id,
            name,
            picture {
                url
            },
            price,
            category
        }
    }
`

