import React from 'react';
import Logo from './Logo';
import './_Home.scss';

export default class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <div className="homeHeader">
          <div className="homeHeaderLogo"><Logo /></div>
          <h1 className="homeHeaderTitle">LA ROUTE DE LA PIERRE</h1>
        </div>
        <div className="homeFooter">
          <h3>Créations en taille pierre </h3>
          <h3>par Orianne & Louis</h3>
        </div>
      </div >
    )
  }
}