import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(null);
	useEffect(() => {
		const getData = async (url) => {
			setLoader(true);
			try {
				let res = await fetch(url);
				if (!res.ok) {
					// let err = new Error('Error en la petición Fetch');
					let err = new Error('Error in fetch query');
					err.status = res.status || '--';
					// err.statusText = res.statusText || 'Ocurrió un error';
					err.statusText = res.statusText || 'An error has ocurred';

					throw err;
				}
				let data = await res.json();

				setData(data);
				setError(null);
			} catch (err) {
				console.log(err);
				setError(err);
			} finally {
				setLoader(false);
			}
		};

		getData(url);
	}, [url]);

	return [data, loader, error];
};
