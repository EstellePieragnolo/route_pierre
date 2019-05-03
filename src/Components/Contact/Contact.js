import React from 'react';
import Header from '../Header/Header';
import Social from '../Loader & logos/Social';
import email from '../../img/email.png';
import phone from '../../img/phone.png';
import './_Contact.scss';

export default class App extends React.Component {


    render() {
        return (
            <div className='contact'>
                <Header />
                <h1 className='contactTitle'>Contact</h1>
                <div className='contactContainer'>
                    <div className='contactContainerItem'>
                        <h3 className='contactContainerItemTitle'>Nous joindre :</h3>
                        <div className='contactContainerItemInfo'>
                            <p>
                                <img src={email} alt="logoEmail" className='contactContainerItemInfoEmail' />
                                laroutedelapierre@gmail.com
                            </p>
                            <p>
                                <img src={phone} alt="logoEmail" className='contactContainerItemInfoPhone' />
                                +336.72.45.59.65   |  +336.72.45.59.65
                            </p>
                        </div>
                    </div>
                    <div className='contactContainerItem'>
                        <h3 className='contactContainerItemTitle'>Nous suivre :</h3>
                        <div className='contactContainerItemInfo'>
                            <Social
                                direction="row"
                                justify="center"
                                margin="0 auto"
                                width={35}
                            />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
