import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { getGists, getGistsByName } from "../../store/gists/thunks";
import { Input } from "@mui/material";
import "./gists.scss";

const searchGistsDebounced = debounce((query, dispatch) => {
  dispatch(getGistsByName(query));
}, 1000);

export const GistsPage = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const { gists, error, pending } = useSelector((state) => state.gists);
  const { gistsByName, errorByName, pendingByName } = useSelector(
    (state) => state.gists
  );

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  useEffect(() => {
    if (!!inputValue) {
      searchGistsDebounced(inputValue, dispatch);
    }
  }, [inputValue, dispatch]);

  if (error || errorByName) {
    return <h1 className="gists-error"> Произошла какая-то ошибка!</h1>;
  }

  return (
    <div className="gists-wrapper">
      <h1>Gists Page</h1>
      <div className="coluns-wrapper">
        <div className="gists-column">
          {pending ? (
            <h1 className="gists-loading">Идет загрузка данных...</h1>
          ) : (
            <>
              <div className="gists-pagination">
                {Array.from({ length: 10 })
                  .map((_, index) => index + 1)
                  .map((item) => (
                    <button key={item} onClick={() => dispatch(getGists(item))}>
                      {item}
                    </button>
                  ))}
              </div>
              <div className="gists">
                {gists.map((gist, index) => (
                  <div className="gist" key={index}>
                    <p>{gist.description || <b>no description</b>}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="gists-column">
          {pendingByName ? (
            <h1 className="gists-loading">Идет загрузка данных...</h1>
          ) : (
            <>
              <Input
                id="outlined-basic"
                size="small"
                placeholder="search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="gists">
                {gistsByName.map((gist, index) => (
                  <div className="gist" key={index}>
                    <p>{gist.description || <b>no description</b>}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
