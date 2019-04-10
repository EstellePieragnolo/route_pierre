import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default class Inspirations extends React.Component {

    render() {
        return (<div className="homeShopInspiration">
            <Query query={inspiration}>
                {({ data, loading, error }) => {
                    if (loading) return 'Loading';
                    if (error) return <p>ERROR</p>;
                    return (
                        data.inspirations &&
                        data.inspirations.map(inspiration => {
                            return (
                                <div>
                                    <h3 className="homeShopInspirationTitle">
                                        {inspiration.title}
                                    </h3>
                                    <p className="homeShopInspirationDescription">
                                        {inspiration.description}
                                    </p>
                                </div>
                            )

                        })

                    );
                }}
            </Query>

        </div>
        )
    }
}

export const inspiration = gql`
  query{
    inspirations {
      id
      description
      title
    }
  }
`