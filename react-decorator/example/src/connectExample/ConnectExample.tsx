import * as React from "react";

import  { Render }  from "../decorates/Render";
import { Connect } from "../decorates/Connect";

@Connect(['count'], [{onIncreaseClick: {type: "increase"}}])
@Render({
	template: function(){
			return <div>
				<p>{this.props.count}</p>
        		<button  onClick={this.props.onIncreaseClick}>Click</button>
        		<h1>ConnectExample</h1>
        	</div>;
        }
})

export class ConnectExample extends React.Component<{}, {}>{
	constructor(props: any) {
		super(props);
	}

	onIncreaseClick(event: any) {
	   	console.log(event);
	}
}
