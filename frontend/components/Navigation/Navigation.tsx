import Link from 'next/link';
import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
	return (
		<nav className={styles.navbar}>
			<Link href='/'>Home</Link>
			<a href='/about'>About us</a>
			<a href='/resources'>Resources</a>
			<a href='/contact-us'>Contact</a>
		</nav>
	);
};

export default Navigation;
