// The types of actions that you can dispatch to modify the state of the store
export const types = {
	QUICK_ADD: 'QUICK_ADD',
	DONE: 'DONE',
	REMOVE: 'REMOVE',
	X_DONE: 'X_DONE',
	RESET: 'RESET',
	CREATE: 'CREATE'
};

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
	quickAdd: (item) => {
		return { type: types.QUICK_ADD, payload: item };
	},
	done: (item) => {
		return { type: types.DONE, payload: item };
	},

	remove: (item) => {
		return { type: types.REMOVE, payload: item };
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
		{ id: 0, text: 'First Task', date: new Date(), type: '' },
		{ id: 1, text: 'Yo Task', date: new Date(), type: '' },
		{ id: 2, text: 'This Task', date: new Date(), type: '' },
		{ id: 3, text: 'Is Task', date: new Date(), type: '' },
		{ id: 4, text: 'Jack Task', date: new Date(), type: '' },
		{ id: 5, text: 'Septic Task', date: new Date(), type: '' },
		{ id: 6, text: 'Second Task', date: new Date(), type: '' },
		{ id: 7, text: 'Second Task', date: new Date(), type: '' },
		{ id: 8, text: 'Second Task', date: new Date(), type: '' }
	],
	taskID: 9
};

export const reducer = (state = initialState, action) => {
	const { done, tasks, taskID } = state;
	const { type, payload } = action;

	switch (type) {
		case types.QUICK_ADD: {
			return {
				...state,
				taskID: taskID + 1,
				tasks: [ ...tasks, { id: taskID, text: payload, date: new Date(), type: '' } ]
			};
		}

		case types.DONE: {
			return {
				...state,
				tasks: tasks.filter((task, i) => task.id !== payload.id),
				done: [ payload, ...done ]
			};
		}

		case types.REMOVE: {
			return {
				...state,
				tasks: tasks.filter((task, i) => task.id !== payload.id)
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

		case types.CREATE: {
			return {
				...state,
				taskID: taskID + 1,
				tasks: [ ...tasks, { id: taskID, text: payload.task, date: payload.date, type: payload.type } ]
			};
		}
		/*case ends*/
	}

	return state;
};
