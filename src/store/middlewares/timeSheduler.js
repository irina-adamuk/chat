export const timeSheduler = (store) => (next) => (action) => {
	const { delay } = action.meta;

	if(!action.meta || !delay) {
		return next(action);
	}

	setTimeout(() => {
		return next(action);
	}, delay);
};