import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default class Logo extends React.Component {

  render() {
    return (
      <Query query={logo}>
        {({ data, loading, error }) => {
          if (loading) return 'Loading';
          if (error) return <p>ERROR</p>;

          return (
            data.logoes &&
            data.logoes.map(logos => {
              return <div key={logos.id}>
                {
                  logos.logo &&
                  <img src={logos.logo.url} alt="" width="300" />
                }
              </div>
            })

          );
        }}
      </Query>

    )
  }
}

export const logo = gql`
  query {
    logoes {        
      id,
      logo {
        url
      }
    }
  }
`