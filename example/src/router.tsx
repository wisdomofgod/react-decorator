import * as React from "react";
import { Route, IndexRoute, hashHistory, Router } from "react-router";
import { RenderFunction } from "./renderExample/RenderFunction";
import { RenderString } from "./renderExample/RenderString";
import { RenderTemplateUrl } from "./renderExample/RenderTemplateUrl";
import { ConnectExample } from "./connectExample/ConnectExample";

export default  (
	<Router history={hashHistory}>
	  <Route path="/">
	  	<IndexRoute component={ConnectExample} />
	  	<Route path="function" component={ RenderFunction }/>
	  	<Route path="/string" component={ RenderString }/>
	  	<Route path="/url" component={ RenderTemplateUrl }/>
	  </Route>
	</Router>
);