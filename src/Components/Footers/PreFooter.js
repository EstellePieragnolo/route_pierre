import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Logo from '../Logo';
import './_PreFooter.scss';

export default class PreFooter extends React.Component {

    render() {
        return (
            <div className="prefooter">
                <div className="prefooterContainer">
                    <div className="prefooterContainerItem">
                        <h4 className="prefooterContainerItemTitle">Catégories</h4>
                        <p className="prefooterContainerItemContent">Le Magasin</p>
                        <p className="prefooterContainerItemContent">Une équipe qui roule</p>
                        <p className="prefooterContainerItemContent">Notre démarche</p>
                        <p className="prefooterContainerItemContent">Nos acolytes</p>
                    </div>
                    <div className="prefooterContainerItem">
                        <h4 className="prefooterContainerItemTitle">Aide & informations</h4>
                        <p className="prefooterContainerItemContent">Conditions de vente</p>
                        <p className="prefooterContainerItemContent">Mentions légales</p>
                        <p className="prefooterContainerItemContent">Service après vente</p>
                    </div>
                    <Logo height={'110px'} />
                    <div className="prefooterContainerItem">
                        <h4 className="prefooterContainerItemTitle">Contact</h4>
                        <p className="prefooterContainerItemContent">laroutedelapierre@gmail.com</p>
                    </div>
                    <div className="prefooterContainerItem">
                        <h4 className="prefooterContainerItemTitle">Nous suivre</h4>

                        <div className="prefooterContainerItemContent">
                            <Query query={logo}>
                                {({ data, loading }) => {
                                    if (loading) return null;

                                    return (
                                        data.logoes &&
                                        data.logoes.map(logos => {
                                            if (logos.title === 'instaLogo') {
                                                return (
                                                    logos.logo &&
                                                    <a className="prefooterContainerItemContentSocial" key={logos.id} href="https://www.instagram.com/laroutedelapierre/" target="_blank">
                                                        <img src={logos.logo.url} className="containerBodyLinkFacebook" alt={logos.title} width={24} />
                                                    </a>
                                                )
                                            }
                                            else if (logos.title === 'facebookLogo') {
                                                return (
                                                    logos.logo &&
                                                    <a className="prefooterContainerItemContentSocial" key={logos.id} href="https://www.facebook.com/La-Route-de-la-Pierre-587625451679647/" target="_blank">
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
                </div>
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