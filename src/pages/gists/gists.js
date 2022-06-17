import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "../../store/gists/thunks";
import "./gists.scss";

// const URL = 'https://api.github.com/gists/public';

export const GistsPage = () => {

	// const [gists, setGists] = useState([]);
	// const [error, setError] = useState(null);
	// const [isLoading, setIsLoading] = useState(false);

	// const getGist = async () => {
	// 	try {
	// 		setIsLoading(true);
	// 		const result = await fetch(URL);
	// 		const data = await result.json();
	// 		if (result.ststus === 200) {
	// 			setGists(data);
	// 		} else {
	// 			setError("Error");
	// 		}

	// 	} catch (e) {
	// 		setError(e);
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };

	// useEffect(() => {
	// 	getGist();
	// }, []);

	const dispatch = useDispatch();
	const {gists, error, pending} = useSelector((state) => state.gists);

	useEffect(() => {
		dispatch(getGists());
	}, [dispatch]);

	if(error) {
		return (
			<h1 className="gists-error"> Произошла какая-то ошибка!</h1>
		)
	}

	// if(isLoading) {
	// 	return (
	// 		<h1>Идет загрузка данных...</h1>
	// 	)
	// }

	if(pending) {
		return (
			<h1 className="gists-loading">Идет загрузка данных...</h1>
		)
	}

	return (
		<div className="gists-wrapper">
			<h1>Gists Page</h1>
			<div className="gists-pagination">
				{Array.from({length: 10}).map((_, index) => index + 1).map((item) => (
					<button key={item} onClick={() => dispatch(getGists(item))}>{item}</button>
				)) }
			</div>
			<div className="gists">
				{ gists.map((gist, index) => (
					<div className="gist" key={index}>
						<p>{gist.description || <b>no description</b>}</p>
					</div>
				))}
			</div>
		</div>
	)
};
