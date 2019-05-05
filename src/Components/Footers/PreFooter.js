import React from 'react';
import Logo from '../Logos/Logo';
import './_PreFooter.scss';
import Social from '../Logos/Social';

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
                    <Logo height={'110px'} image='img' />
                    <div className="prefooterContainerItem">
                        <h4 className="prefooterContainerItemTitle">Contact</h4>
                        <p className="prefooterContainerItemContent">laroutedelapierre@gmail.com</p>
                    </div>
                    <div className="prefooterContainerItem">
                        <h4 className="prefooterContainerItemTitle">Nous suivre</h4>

                        <div className="prefooterContainerItemContent">
                            <Social
                                direction="row"
                                justify="center"
                                width={24}
                            />
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}