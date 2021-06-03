import React, { useState } from "react";
import "./App1.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import useToken from "./useToken";
import Preferences from "./Preferences";
import Dashboard from "./Dashboard";




function App() {
    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div class="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;