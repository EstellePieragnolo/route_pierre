import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from './paths';
import Home from './Home';
import Shop from './Shop/Shop';

export default class App extends React.Component {


   render() {
      return (
         <div className="App">
            <Router>
               <div>
                  {/* <Header /> */}
                  <main>
                     <Route exact={true} path={Routes.ROOT} component={Home} />
                     <Route exact={true} path={Routes.SHOP} component={Shop} />
                  </main>
               </div>
            </Router>
         </div>
      );
   }
}


