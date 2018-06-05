export const FETCH_USERS_BEGIN   = "FETCH_USERS_BEGIN";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const SORT_BY_DESC = "SORT_BY_DESC";
export const SORT_BY_ASC = "SORT_BY_ASC";

export const fetchUsersBegin = () => ({
	type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = users => ({
	type: FETCH_USERS_SUCCESS,
	payload: { users }
});

export const fetchUsersError = error => ({
	type: FETCH_USERS_FAILURE,
	payload: { error }
});

export const sortByDesc = users => ({
	type: SORT_BY_DESC,
	payload: { users }
});

export const sortByAsc = users => ({
	type: SORT_BY_ASC,
	payload: { users }
});


