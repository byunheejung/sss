import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Header from './components/Header.js';
import Posts from './routes/Posts';
import Mypage from './routes/Mypage';
import Login from './routes/Login';
import Search from './routes/Search';
import NotFound from './routes/NotFound';

const App = () => {
    return (
        <Router>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/> 
                <Route path="/about/:username" component={About}/> 
                <Route path="/posts" component={Posts}/>
                <Route path="/me" component={Mypage}/> 
                <Route path="/login" component={Login}/> 
                <Route path="/search" component={Search}/> 
                <Route component={NotFound}/> 
            </Switch>
            
        </div>
        </Router>
    );
};

export default App;