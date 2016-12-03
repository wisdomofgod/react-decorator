import * as React from "react";
import { newJsx } from "./lib/wisJsx";

export var Render = ({ template, templateUrl }: {template?: any, templateUrl?: any}): any => {
	return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
		this.props = {};

		var getRender = function(): any{
			switch (typeof template) {
				case "function":
					return template;
				case "string":
					return jsxRender();
				case "undefined":
					if (templateUrl) {
						return urlRender();
					} else {
						return <h1>nothing</h1>
					}
			}
		}

		var jsxRender = function(){
			var render = newJsx`${template}`;
			return render();
		}

		var urlRender = function(){
			try{
				
			}catch(e) {
				
			}
		}

		target.prototype.render =   getRender();
	}
}