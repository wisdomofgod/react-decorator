export var Counter =  function(state = { count: 0}, action = { type: ''}) {
	const count = state.count;
	switch (action.type) {
		case "increase":
			return { count: count + 1 };
		default:
			return state;
	}
}