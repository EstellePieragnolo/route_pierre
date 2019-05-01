import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Loader from '../Loader/Loader';

export default class ShopNotice extends React.Component {


    render() {
        const id = this.props.match.params.id ? this.props.match.params.id : null;
        console.log(this.props.match.params)
        return (
            <div>
                <Query query={notice}>
                    {({ data, loading, error }) => {
                        if (loading) return <Loader />;
                        if (error) return <p>ERROR</p>;
                        return (
                            data.creations &&
                            data.creations.map(creation => {
                                if (id === creation.id) {
                                    return (
                                        <div>
                                            <h2>{creation.name}</h2>
                                        </div>
                                    )
                                } else return null
                            })

                        );
                    }}
                </Query>

            </div>
        );

    }
}

export const notice = gql`
    query {
        creations {
            id,
            name,
            picture {
                url
            },
            price,
            description {
                text
            },
            stone,
            steel,
            maintain,
            dimension,
            finish
        }
    }
`
