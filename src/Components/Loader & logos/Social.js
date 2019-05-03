import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import './_Social.scss';

export default class Loader extends React.Component {

    render() {
        return (
            <div className='social' style={{ flexDirection: this.props.direction, justifyContent: this.props.justify }}>
                <Query query={logo}>
                    {({ data, loading }) => {
                        if (loading) return null;

                        return (
                            data.logoes &&
                            data.logoes.map(logos => {
                                if (logos.title === 'instaLogo') {
                                    return (
                                        logos.logo &&
                                        <a
                                            className="socialItem"
                                            key={logos.id} href="https://www.instagram.com/laroutedelapierre/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ margin: this.props.margin }}
                                        >
                                            <img src={logos.logo.url} className="socialItemFacebook" alt={logos.title} width={this.props.width} />
                                        </a>
                                    )
                                }
                                else if (logos.title === 'facebookLogo') {
                                    return (
                                        logos.logo &&
                                        <a
                                            className="socialItem"
                                            key={logos.id}
                                            href="https://www.facebook.com/La-Route-de-la-Pierre-587625451679647/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ margin: this.props.margin }}
                                        >
                                            <img src={logos.logo.url} className="socialItemInstagram" alt={logos.title} width={this.props.width} />
                                        </a>
                                    )
                                }
                                else return null;
                            })

                        );
                    }}
                </Query>
            </div>

        )
    }
}

export const logo = gql`
  query {
    logoes {  
      title,
      logo {
        url
      }
    }
  }
`