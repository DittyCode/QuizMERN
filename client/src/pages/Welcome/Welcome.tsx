import styled from './Welcome.module.scss';
import Navbar from '../../components/Navbar/Navbar';

const Welcome = () => {
	return (
		<section className={styled.welcome}>
			<Navbar />
		</section>
	);
};

export default Welcome;
