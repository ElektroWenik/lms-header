import React from 'react';
import Header from './header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '../routes';


const component =
<div className="App">
    <Router>
        <Header/>
        {routes.map((route, index) => (<Route key={index} path={route.path} component={route.component} />))}
    </Router>
</div>;

function App() {
  return component;
}

export default App;
