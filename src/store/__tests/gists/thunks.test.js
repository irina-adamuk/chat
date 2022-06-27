import { getGists, getGistsStart, getGistsSuccess, getGistsByNameStart, getGistsByNameSuccess, getGistsByName } from "../../gists";

describe("get gists thunk", () => {
  it("success", async () => {
		const PAGE = 5
		const DATA = "ok"

		const dispatch = jest.fn()
		const getPublicGistsApi = jest.fn().mockResolvedValue({data: DATA});


		const thunk = getGists(PAGE);

		await thunk(dispatch, null, { getPublicGistsApi });

		expect(getPublicGistsApi).toBeCalledWith(PAGE);
		expect(getPublicGistsApi).toBeCalledTimes(1);

		expect(dispatch).toBeCalledTimes(2);
		expect(dispatch).toHaveBeenNthCalledWith(1, getGistsStart());
		expect(dispatch).toHaveBeenNthCalledWith(2, getGistsSuccess(DATA));
	});
});


describe("get gists by name thunk", () => {
  it("success", async () => {
		const NAME = "bogdanq"
		const DATA = "ok"

		const dispatch = jest.fn()
		const getGistsByNameApi = jest.fn().mockResolvedValue({data: DATA});


		const thunk = getGistsByName(NAME);

		await thunk(dispatch, null, { getGistsByNameApi });

		expect(getGistsByNameApi).toBeCalledWith(NAME);
		expect(getGistsByNameApi).toBeCalledTimes(1);

		expect(dispatch).toBeCalledTimes(2);
		expect(dispatch).toHaveBeenNthCalledWith(1, getGistsByNameStart());
		expect(dispatch).toHaveBeenNthCalledWith(2, getGistsByNameSuccess(DATA));
	});
});