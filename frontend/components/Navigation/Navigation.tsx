import Link from 'next/link';
import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
	return (
		<nav className={styles.navbar}>
			<Link href='/'>Home</Link>
		</nav>
	);
};

export default Navigation;
