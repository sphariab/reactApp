import fetch from "cross-fetch";
import {
	FETCH_USERS_BEGIN,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_FAILURE,
	SORT_BY_DESC,
	SORT_BY_ASC
} from "../actions";

import {
	fetchUsersBegin,
	fetchUsersSuccess,
	fetchUsersError,
	sortByDesc,
	sortByAsc
} from "../actions";

const initialState = {
	items: [],
	loading: false,
	error: null
};

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

export default function usersReducer(state = initialState, action) {
	switch(action.type) {
		case FETCH_USERS_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};

		case FETCH_USERS_SUCCESS:
			return {
				...state,
				loading: false,
				items: action.payload.users
			};

		case FETCH_USERS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
				items: []
			};

		case SORT_BY_ASC:
			return Object.assign({}, state, {
				items: state.items.sort((a,b) => (a.id - b.id))
			});

		case SORT_BY_DESC:
			return Object.assign({}, state, {
				items: state.items.sort((a,b) => (b.id - a.id))
			});

		default:
			return state;
		}
}

export function fetchUsers(startNum, endNum) {
	return dispatch => {
		dispatch(fetchUsersBegin());
		return fetch('http://localhost:3004/employees?_start='+ startNum +'&_end=' + endNum)
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(fetchUsersSuccess(json));
				return json;
			})
			.catch(error => dispatch(fetchUsersError(error)));
	};
}

export function sortByDescField() {
	return dispatch => {
		dispatch(sortByDesc());
	};
}

export function sortByAscField() {
	return dispatch => {
		dispatch(sortByAsc());
	};
}