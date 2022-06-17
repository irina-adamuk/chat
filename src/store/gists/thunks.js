import { getGistsStart, getGistsSuccess, getGistsError } from "./actions";

const URL = (page) => `https://api.github.com/gists/public?page=${page}`;

export const getGists = (page = 1) => async (dispatch) => {
  try {
		dispatch(getGistsStart());

    const result = await fetch(URL(page));
    const data = await result.json();

		if(result.status === 200) {
			dispatch(getGistsSuccess(data));
		} else {
			dispatch(getGistsError("Произошла ошибка"));
		}
  } catch (e) {
		dispatch(getGistsError(e));
	}
};
