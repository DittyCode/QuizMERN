import styled from './Welcome.module.scss';
import Navbar from '../../components/Navbar/Navbar';

const Welcome = () => {
	return (
		<section className={styled.welcome}>
			<Navbar />
			<div className={styled.container}>
				<h1 className={styled.welcome__title}>Quiz App</h1>
				<p className={styled.welcome__description}>Log In to access</p>
				<div className={styled.bubble}></div>
			</div>
		</section>
	);
};

export default Welcome;
