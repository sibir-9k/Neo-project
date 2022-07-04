const initialState = {
	claims: [
		{
      id: '1',
			title: "Figma smart web system for to build",
			create: "12/04/2021",
			type: "Hardware",
			status: "declined",
      description: 'dagadfga'
		},
		{
      id: '2',
			title: "Figma smart web system for to build",
			create: "12/04/2021",
			type: "Software",
			status: "new",
      description: 'zl,fl,sdl;f'
		},
		{
      id: '3',
			title: "Figma smart web system for to build",
			create: "12/04/2021",
			type: "Networking",
			status: "in progress",
      description: 'ASFas,gal,df'
		},
	],
};

export const listReducer = (state = initialState, action) => {

	switch (action.type) {
		case 'CREATE_ROW': return{...state, claims: state.claims.concat([action.payload]) }

		default:
      return state
	}

	// 	switch (action.type) {

	// 		// case CREATE_TASK:
	// 		// 	return {...state, tasks: state.tasks.concat([action.payload])};

	// 		// case SET_COMPLETED_FLAG:
	// 		// 	return {
	// 		// 		...state,
	// 		// 		tasks: state.tasks.map((item) => {
	// 		// 			if (item.key === action.payload) {
	// 		// 				item.completed = !item.completed;
	// 		// 			}
	// 		// 			return item;
	// 		// 		}),
	// 		// 	};

	// 		// case DELETE_TASK:
	// 		// 	return {
	// 		// 		...state,
	// 		// 		tasks: state.tasks.filter((el) => el.key != action.payload),
	// 		// 	};

	// 		// case SET_FILTER:
	// 		// 	return {...state, filter: action.payload};

	// 		// default:
	// 		// 	return state;
	// 	}
};
