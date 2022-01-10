import styled from './App.module.scss';
import NotFound from './pages/NotFound/NotFound';
import { Route, Routes } from 'react-router';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<main className={styled.app}>Title!</main>} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default App;
