import styled from './NotFound.module.scss';
import notFoundBG from './../../assets/images/question-marks.jpg';
import notFoundSVG from './../../assets/svg/notfound.svg';
import { useNavigate } from 'react-router';

const NotFound = () => {
	const navigate = useNavigate();

	const handleButtonRedirect = () => {
		navigate('./', { replace: true });
	};

	return (
		<section className={styled.notFound}>
			<img src={notFoundBG} className={styled.notFound__image} alt='' />
			<h1 className={styled.notFound__title}>
				<span className={styled.notFound__letter}>N</span>
				<span className={styled.notFound__letter}>O</span>
				<span className={styled.notFound__letter}>T</span>
				<span className={styled.notFound__letter}>F</span>
				<span className={styled.notFound__letter}>o</span>
				<span className={styled.notFound__letter}>u</span>
				<span className={styled.notFound__letter}>n</span>
				<span className={styled.notFound__letter}>d</span>
			</h1>
			<img src={notFoundSVG} className={styled.notFound__svg} alt='' />
			<button className={styled.notFound__btn} onClick={handleButtonRedirect}>
				Back to home
			</button>
		</section>
	);
};

export default NotFound;
