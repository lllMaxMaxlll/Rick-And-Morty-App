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
			return {
				...state,
				myFavorites: [...state.myFavorites].filter(
					(char) => char.id !== payload
				),
			};

		case FILTER:
			const filtered =
				payload === "All"
					? [...state.allCharacters]
					: state.allCharacters.filter((char) => char.gender === payload);
			return {
				...state,
				myFavorites: filtered,
			};

		case ORDER:
			const sorted = [...state.allCharacters];
			if (payload === "ascendente") {
				sorted.sort((a, b) => a.id - b.id);
			} else {
				sorted.sort((a, b) => b.id - a.id);
			}
			return {
				...state,
				myFavorites: sorted,
			};

		default:
			return state;
	}
};

export default reducer;
