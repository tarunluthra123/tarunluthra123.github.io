import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={'/'} component={MainPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default withRouter(App);
