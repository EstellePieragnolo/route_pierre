import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default class Logo extends React.Component {

  render() {
    return (
      <div>
        {
          <Query query={logo}>
            {({ data, loading, error }) => {
              if (loading) return null;
              if (error) return <p>error</p>;

              return (
                data.logoes &&
                data.logoes.map(logos => {
                  if (logos.title === 'mainLogo') {
                    return (
                      logos.logo &&
                      <img key={logos.id} src={logos.logo.url} alt="logo" height={this.props.height} />
                    )
                  } else {
                    return <div>
                      bbablabjkjk
                    </div>
                  };
                })

              );
            }}
          </Query>
        }
      </div>

    )
  }
}

export const logo = gql`
  query {
    logoes {        
      id,
      title,
      logo {
        url
      }
    }
  }
`