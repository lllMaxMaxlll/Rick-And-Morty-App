import { ADD_FAV, DELETE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
	myFavorites: [],
	allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_FAV:
			return {
				myFavorites: [...state.myFavorites, payload],
				allCharacters: [...state.allCharacters, payload],
			};

		case DELETE_FAV:
			const deleteArray = [...state.myFavorites].filter(
				(char) => char.id !== payload
			);
			return {
				allCharacters: deleteArray,
				myFavorites: deleteArray,
			};

		case FILTER:
			let filtered =
				payload === "All"
					? state.allCharacters
					: state.allCharacters.filter((char) => char.gender === payload);
			return {
				...state,
				myFavorites: filtered,
			};

		case ORDER:
			let order = [...state.myFavorites];
			if (payload === "ascendente") {
				order.sort((a, b) => a.id - b.id);
			} else {
				order.sort((a, b) => b.id - a.id);
			}
			return {
				...state,
				myFavorites: order,
			};

		default:
			return state;
	}
};

export default reducer;
