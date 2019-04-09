import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home'
import './App.css';

export default class App extends React.Component {


   render() {
      return (
         <div className="App">
            <Router>
               <div>
                  <Header />
                  <main>
                     <Route exact path='/' component={Home} />
                  </main>
               </div>
            </Router>
         </div>
      );
   }
}


