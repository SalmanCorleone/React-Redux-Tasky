// The types of actions that you can dispatch to modify the state of the store
export const types = {
	ADD: 'ADD',
	REMOVE: 'REMOVE',
	X_DONE: 'X_DONE',
	RESET: 'RESET',
	CREATE: 'CREATE'
};

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
	add: (item) => {
		return { type: types.ADD, payload: item };
	},
	remove: (index, item) => {
		return { type: types.REMOVE, payload: { index, item } };
	},
	x_done: (index) => {
		return { type: types.X_DONE, payload: index };
	},
	reset: () => {
		return { type: types.RESET, payload: '' };
	},
	create: (task, date, type) => {
		return { type: types.CREATE, payload: { task, date, type } };
	}
};

// Initial state of the store
const initialState = {
	done: [],
	tasks: [
		{ text: 'First Task', date: new Date(), type: '' },
		{ text: 'Yo Task', date: new Date(), type: '' },
		{ text: 'This Task', date: new Date(), type: '' },
		{ text: 'Is Task', date: new Date(), type: '' },
		{ text: 'Jack Task', date: new Date(), type: '' },
		{ text: 'Septic Task', date: new Date(), type: '' },
		{ text: 'Second Task', date: new Date(), type: '' },
		{ text: 'Second Task', date: new Date(), type: '' },
		{ text: 'Second Task', date: new Date(), type: '' }
	],
	active: 'true'
};

export const reducer = (state = initialState, action) => {
	const { done, tasks } = state;
	const { type, payload } = action;

	switch (type) {
		case types.ADD: {
			return {
				...state,
				tasks: [ { text: payload, date: '', type: '' }, ...tasks ]
			};
		}
		case types.CREATE: {
			return {
				...state,
				tasks: [ { text: payload.task, date: payload.date, type: payload.type }, ...tasks ]
			};
		}
		case types.REMOVE: {
			return {
				...state,
				tasks: tasks.filter((task, i) => i !== payload.index),
				done: [ payload.item, ...done ]
			};
		}

		case types.X_DONE: {
			return {
				...state,
				done: done.filter((done, i) => i != payload)
			};
		}

		case types.RESET: {
			return initialState;
		}
		/*case ends*/
	}

	return state;
};
