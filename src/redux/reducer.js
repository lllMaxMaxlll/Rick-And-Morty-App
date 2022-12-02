import { ADD_FAV, DELETE_FAV } from "./actions";

const initialState = {
	myFavorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_FAV:
			return {
				myFavorites: [...state.myFavorites, payload],
			};
		case DELETE_FAV:
			return {
				myFavorites: [...state.myFavorites].filter(
					(char) => char.id !== payload
				),
			};
		default:
			return state;
	}
};

export default reducer;
