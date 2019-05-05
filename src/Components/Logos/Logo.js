import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default class Logo extends React.Component {

  render() {
    return (
      <Query query={logo}>
        {({ data, loading, error }) => {
          if (loading) return null;
          if (error) return null;

          return (
            data.logoes &&
            data.logoes.map(logos => {
              if (logos.title === 'mainLogo') {

                if (logos.logo && this.props.image === 'img') {
                  return <img key={logos.id} src={logos.logo.url} alt="logo" height={this.props.height} />
                } else if (logos.logo && this.props.image === 'title') {
                  return <h1 className="homeHeaderContainerItemsTitle" style={{ backgroundImage: `url(${logos.logo.url})` }}>LA ROUTE DE LA PIERRE</h1>
                } else return null
              } else return null;
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
      title,
      logo {
        url
      }
    }
  }
`
