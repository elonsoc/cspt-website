import Link from 'next/link';
import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
	return (
		<nav className={styles.navbar}>
			<Link href='/'>Home</Link>
			<a href="/1">About us</a>
			<a href="/2">Resources</a>
			<a href="/3">Contact</a>
		</nav>
	);
};

export default Navigation;
