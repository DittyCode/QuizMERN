import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
	const navigate = useNavigate();

	const fetchData = async () => {
		try {
			const response = await axios.get('http://localhost:3000/api/v1/users', {
				headers: {
					authorization: 'Bearer ' + localStorage.getItem('token'),
				},
			});

			const data = response.data;

			console.log(data.message);
		} catch (err) {
			console.log(err);
			navigate('/', { replace: true });
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <div>Title</div>;
};

export default Quiz;
