import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default class Logo extends React.Component {

  render() {
    return (
      <Query query={logo}>
        {({ data, loading, error }) => {
          if (loading) return null;
          if (error) return <p>ERROR</p>;

          return (
            data.logoes &&
            data.logoes.map(logos => {
              return (
                logos.logo &&
                <img key={logos.id} src={logos.logo.url} alt="" height="427" />
              )
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