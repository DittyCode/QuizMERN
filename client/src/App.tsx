import styled from './App.module.scss';
import NotFound from './pages/NotFound/NotFound';
import Welcome from './pages/Welcome/Welcome';
import { Route, Routes } from 'react-router';

const App = () => {
	return (
		<div className={styled.app}>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
