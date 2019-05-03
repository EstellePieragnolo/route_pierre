import React from 'react';
import Header from '../Header/Header';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export default class App extends React.Component {


    render() {
        return (
            <div>
                <Header />
                <h1>Contact</h1>
                <div>
                    <h3>Nous joindre :</h3>
                    <p>laroutedelapierre@gmail.com</p>
                    <p>+336.72.45.59.65   |  +336.72.45.59.65</p>
                </div>
                <div>
                    <h3>Nous suivre :</h3>
                    <Query query={logo}>
                        {({ data, loading }) => {
                            if (loading) return null;

                            return (
                                data.logoes &&
                                data.logoes.map(logos => {
                                    if (logos.title === 'instaLogo') {
                                        return (
                                            logos.logo &&
                                            <a className="prefooterContainerItemContentSocial" key={logos.id} href="https://www.instagram.com/laroutedelapierre/" target="_blank" rel="noopener noreferrer">
                                                <img src={logos.logo.url} className="containerBodyLinkFacebook" alt={logos.title} width={24} />
                                            </a>
                                        )
                                    }
                                    else if (logos.title === 'facebookLogo') {
                                        return (
                                            logos.logo &&
                                            <a className="prefooterContainerItemContentSocial" key={logos.id} href="https://www.facebook.com/La-Route-de-la-Pierre-587625451679647/" target="_blank" rel="noopener noreferrer">
                                                <img src={logos.logo.url} className="containerBodyLinkInstagram" alt={logos.title} width={24} />
                                            </a>
                                        )
                                    }
                                    else return null;
                                })

                            );
                        }}
                    </Query>
                </div>
            </div>

        );
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