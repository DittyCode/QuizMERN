import styled from './App.module.scss';
import NotFound from './pages/NotFound/NotFound';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Quiz from './pages/Quiz/Quiz';
import { Route, Routes } from 'react-router';

const App = () => {
	return (
		<div className={styled.app}>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/quiz' element={<Quiz />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
