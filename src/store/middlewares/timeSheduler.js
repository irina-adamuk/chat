export const timeSheduler = (store) => (next) => (action) => {

	if(!action.meta || !action.meta.delay) {
		return next(action);
	}

	setTimeout(() => {
		return next(action);
	}, action.meta.delay);
};