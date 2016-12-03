import * as React from "react";
import * as ReactDOM from 'react-dom';
import router from "./router";
import { Provider } from "react-redux";
import { store } from "./connectExample/store";

ReactDOM.render((
	<div>
		<Provider store={ store }>
			{ router } 
		</Provider>
	</div>
	), document.getElementById('app'));