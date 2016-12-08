import * as React from "react";

import  { Render }  from "../decorates/Render";
import { Connect } from "../decorates/Connect";
import { runTime } from "../decorates/runTime";

@Render({
	template: function(){
		return <div>
			<p>{this.props.count}</p>
       		<button  onClick={this.onIncreaseClick}>点击</button>
       		<h1>RenderFunction example!</h1>
       	</div>;
	}
})

export class RenderFunction extends React.Component<{}, {}>{
	constructor(props: any) {
		super(props);
	}

	@runTime(true)
	onIncreaseClick(...args: any[]) {
		let stopTime = args.pop();
		
	   	setTimeout(function(){
	   		stopTime('setTimeout');
	   	}, 5000);
	   	stopTime('onIncreaseClick');
	}
}
