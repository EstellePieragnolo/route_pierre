import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default class Home extends React.Component {

  render() {
    return (
      <Query query={creas}>
        {({ data, loading, error }) => {
          if (loading) return 'Loading';
          if (error) return <p>ERROR</p>;

          return (
            data.creas &&
            data.creas.map(crea => {
              return <div key={crea.id}>
                <p >{crea.id}</p>
                <p> {crea.name}</p>
                {
                  crea.picture &&
                  <img src={crea.picture.url} alt="" width="300" />
                }
              </div>
            })

          );
        }}
      </Query>
    );

  }
}

export const creas = gql`
query {
  creas {
    id,
    name,
    picture {
      id,
      url
    }
  }
}
  
`