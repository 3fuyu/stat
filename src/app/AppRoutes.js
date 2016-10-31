import React from "react";
import {Route, Redirect, IndexRoute} from "react-router";
import Master from "../app/js/components/Master";
import Login from "../app/js/components/Login";
import NewArticle from "../app/js/components/NewArticle";
import Company from "../app/js/components/Company";
import Stat from "../app/js/components/Stat";
import User from "../app/js/components/User";
import Content from "../app/js/components/Content";

const AppRoutes = (
    <Route path="/" component={Master}>
        <IndexRoute component={Stat}/>
        <Redirect from="/" to="/stat/task"/>
        <Route path="login" component={Login}/>
        <Route path="new-article" component={NewArticle}/>
        <Route path="stat/:type" component={Stat}/>
        <Route path="company/:type" component={Company}/>
        <Route path="user/:type" component={User}/>
        <Route path="content/:type" component={Content}/>
    </Route>
);

export default AppRoutes;
