import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './_Loader.scss';

export default class Loader extends React.Component {

    render() {
        return (
            <Query query={logo}>
                {({ data, loading, error }) => {
                    if (loading) return null;
                    if (error) return <p>ERROR</p>;

                    return (
                        data.logoes &&
                        data.logoes.map(logos => {
                            if (logos.title === 'mainLogo') {
                                return (
                                    logos.logo &&
                                    <div className="loader">
                                        <img
                                            key={logos.id}
                                            src={logos.logo.url}
                                            alt="loader"
                                            height={this.props.height}
                                            className="loaderImage"
                                        />
                                    </div>
                                )
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