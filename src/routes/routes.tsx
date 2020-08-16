import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginScreen from "../screens/login";
import ListScreen from '../screens/list'


const Routes = () =>  {
    return(
            <Switch>
                <Route path="/" exact component={LoginScreen} />
                <Route path="/products"  component={ListScreen} />
            </Switch>
        )
    }

export default Routes