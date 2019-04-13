import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Logo from '../Logo';
import './_PreFooter.scss';

export default class PreFooter extends React.Component {

    render() {
        return (
            <div className="prefooter">
                <div className="prefooterItem">
                    <h4 className="prefooterItemTitle">Catégories</h4>
                    <p className="prefooterItemContent">Le Magasin</p>
                    <p className="prefooterItemContent">Une équipe qui roule</p>
                    <p className="prefooterItemContent">Notre démarche</p>
                    <p className="prefooterItemContent">Nos acolytes</p>
                </div>
                <div className="prefooterItem">
                    <h4 className="prefooterItemTitle">Aide & informations</h4>
                    <p className="prefooterItemContent">Conditions de vente</p>
                    <p className="prefooterItemContent">Mentions légales</p>
                    <p className="prefooterItemContent">Service après vente</p>
                </div>
                <Logo />
                <div className="prefooterItem">
                    <h4 className="prefooterItemTitle">Contact</h4>
                    <p className="prefooterItemContent">laroutedelapierre@gmail.com</p>
                </div>
                <div className="prefooterItem">
                    <h4 className="prefooterItemTitle">Nous suivre</h4>

                    <div className="prefooterItemContent">
                        <Query query={logo}>
                            {({ data, loading }) => {
                                if (loading) return null;

                                return (
                                    data.logoes &&
                                    data.logoes.map(logos => {
                                        if (logos.title === 'instaLogo') {
                                            return (
                                                logos.logo &&
                                                <a className="prefooterItemContentSocial" key={logos.id} href="https://www.facebook.com/La-Route-de-la-Pierre-587625451679647/" target="_blank">
                                                    <img src={logos.logo.url} className="containerBodyLinkFacebook" alt={logos.title} width={24} />
                                                </a>
                                            )
                                        }
                                        else if (logos.title === 'facebookLogo') {
                                            return (
                                                logos.logo &&
                                                <a className="prefooterItemContentSocial" key={logos.id} href="https://www.instagram.com/laroutedelapierre/" target="_blank">
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