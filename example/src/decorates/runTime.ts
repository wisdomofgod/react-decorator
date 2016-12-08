export var runTime = function(isAsync?: boolean): any {
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		let fn = descriptor.value;
		let startTime: number, endTime: number;
		descriptor.value = isAsync ? asyncStartFunction : startFunction;

		function asyncStartFunction(...args: any[]) {
			startTime = Date.now();
			fn.call(this, ...args, stopTime);
		}

		function startFunction(...args: any[]) {
			startTime = Date.now();
			fn.call(this, ...args);
			endTime = Date.now();
			console.log(`Run time: ${endTime - startTime}`);
		}

		function stopTime(title = '') {
			endTime = Date.now();
			console.log(`Run time ${title}: ${endTime - startTime}`);
		}
	}
}