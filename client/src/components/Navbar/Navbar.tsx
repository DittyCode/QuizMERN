import logo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import styled from './Navbar.module.scss';

const Navbar = () => {
	return (
		<div className={styled.wrapper}>
			<nav className={styled.nav}>
				<div className={styled.logo}>
					<Link className={styled.logo__anchor} to='/'>
						<img src={logo} alt='logo' className={styled.logo__image} />
					</Link>
				</div>
				<ul className={styled.nav__list}>
					<Link to='/login' className={styled.nav__anchor}>
						<li className={styled.nav__item}>Login</li>
					</Link>
					<Link to='/register' className={styled.nav__anchor}>
						<li className={styled.nav__item}>Register</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
