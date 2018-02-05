react-decorator
===

first
	this code is use typescript
	when you want to use decorator
	you need add the `"experimentalDecorators": true` in the tsconfig.json


Render
---
What does it work
	the decorate can let you use string or load file instead of write render function in class

How to use
	`import { Render } from "./decorates/Render";`
	if you want to use two method or three method, you need use `string-jsx`;
	`string-jsx` in https://github.com/wisdomofgod/string-jsx;

First Method
	@Render(
		template: function(){
			return <div></div>
		}
	)

Two Method
	@Render(
		templateUrl: "./src/renderExample/example"
	)

	This path is relative to where you run `webpack`

Three Method
	@Render(
		template: `<div></div>`
	)

Connect
---
What does it work
	the decorate can return container component from presentational component

How to use
	`import { Connect } from "./decorates/Connect";`
	you need use react-redux, you can use `npm install --save-dev react-redux` to install react-redux

First Method
	@Connect(
		function(state: any) {
			return {
				count: state.count
			}
		},
		function(dispatch: any) {
			return {
				onClick: display({type: "ON_CLICK"})
			}
		}
	)

Two Method
	@Connect(
		['count'], [{onClick: {type: "ON_CLICK"}}]
	)

	if you use ['count'], you will let props['count'] = state['count'];
	if you use ['test.count'], you will let props['count'] = state['test']['count']
	if you use [{count: 'count'}], you will let props['count'] = state['count']

runTime
---
What does it work
	the decorate can console.log how long has this function running; 

How to use
	`import { runTime } from "./decorates/runTime";`

First Method(sync)
	class Test {

		@runTime()
		click() {
			//doing something
		}
	}

Second Method(async)
	class Test {

		@runTime(true)
		click(stopTime?: any) {
			setTimeout(function() {
				stopTime('setTimeout');
			}, 5000);

			stopTime('click');
		}
	}


Example
---
First
	change the shell path to example and run `npm install`

Second
	run `webpack-dev-server`
	this example have four routers
	/#/
	/#/function
	/#/string
	/#/url
