import * as React from "react";

import  { Render }  from "../decorates/Render";
import { Connect } from "../decorates/Connect";

@Render({
	template: function(){
		return <div>
			<p>{this.props.count}</p>
       		<button  onClick={this.props.onIncreaseClick}>点击</button>
       		<h1>RenderString Template</h1>
       	</div>;
	}
})

export class RenderString extends React.Component<{}, {}>{
	constructor(props: any) {
		super(props);
	}

	onIncreaseClick(event: any) {
	   	console.log(event);
	}
}
