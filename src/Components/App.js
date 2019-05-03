import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from './paths';
import Home from './Home';
import Shop from './Shop/Shop';
import ShopNotice from './Shop/ShopNotice';
import Contact from './Contact/Contact';

export default class App extends React.Component {


   render() {
      return (
         <div className="App">
            <Router>
               <div>
                  <Switch>
                     <Route exact={true} path={Routes.ROOT} component={Home} />
                     <Route exact={true} path={Routes.SHOP} component={Shop} />
                     <Route exact={true} path={Routes.NOTICE} component={ShopNotice} />
                     <Route exact={true} path={Routes.CONTACT} component={Contact} />
                  </Switch>
               </div>
            </Router>
         </div>
      );
   }
}


