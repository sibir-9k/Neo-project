// const initialState = {
// 	users: [
// 		{
// 			email: null,
// 			token: null,
// 			id: null,
// 		},
// 	],
// };

// export const userReduser = (state = initialState, action) => {
// 	switch (action.type) {
// 		case "SET_USER":
// 			return {
// 				...state,
// 				email: state.users.concat([action.payload]),
// 			};
// 		case "CREATE_ROW":
// 			return {...state, claims: state.claims.concat([action.payload])};
// 		case "REMOVE_USER":
// 			return state ;
// 		default:
// 			return state;
// 	}
// };
