import * as React from "react";
import { connect } from "react-redux";

export var Connect = function(mapState: any, mapDispatch: any): any{

	var content = function(Component: any): any {
		const mapStateToProps = ((): any => {
			if (typeof mapStateToProps === "function") {
				return mapStateToProps;
			}

			return (state: any, ownProps?: any) => {
				let obj = Object();
				mapState.map((key: any, value: any) => {
					if (typeof key === "string") {
						if (key.indexOf('.') > -1) {
							let keys = key.split('.');
							let firstKey = keys.shift();
							obj[keys[keys.length - 1]] = keys.reduce((o: any, k: string) => {
								return o[k];
							}, firstKey);
						} else {
							obj[key] = state[key];
						}
					} else if(typeof key === "object") {
						let k = Object.keys(key)[0];
						let v = key[k];
						
						if (v.indexOf('.') > -1) {
							let vs = v.split('.');
							let firstV = v.shift();
							obj[k] = vs.reduce((o: any , k: string) => {
								return o[k];
							}, firstV);
						} else {
							obj[k] = state[v];
						}
					}
				})
				return obj;
			}

		})();

		const mapDispatchToProps = ((): any => {
			if (typeof mapDispatch === "function") {
				return mapDispatch;
			}

			return (dispatch: any, ownProps?: any) => {
				let obj = Object();
				mapDispatch.map((item: any) => {
					let key = Object.keys(item)[0];
					obj[key] = () => dispatch(item[key]);
				})
				return obj;
			};
		})();
				
		//利用connect生成UI组件的容器
		var NewComponent = connect(
			mapStateToProps,
			mapDispatchToProps
		)(Component);

		return class Content extends React.Component<{}, {}> {
			store: any;
			constructor(props: any) {
				super(props);
			}

			render() {
				return <NewComponent/>
			}
		}
	}

	return (target: any): any => {
		return content(target);
	};
}