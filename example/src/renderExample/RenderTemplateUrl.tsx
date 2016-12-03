import * as React from "react";

import  { Render }  from "../decorates/Render";
import { Connect } from "../decorates/Connect";

@Render({
	templateUrl: "./src/renderExample/example.html"
})

export class RenderTemplateUrl extends React.Component<{}, {}>{
	constructor(props: any) {
		super(props);
	}

	onIncreaseClick(event: any) {
	   	console.log(event);
	}
}
