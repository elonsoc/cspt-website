import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={styles.main}>
			<Link className={styles.card} href='/1'>
				1
			</Link>
			<Link className={styles.card} href='/3'>
				3
			</Link>
			<Link className={styles.card} href='/2'>
				2
			</Link>
			<Link className={styles.card} href='/4'>
				4
			</Link>
			<Link className={styles.card} href='/5'>
				5
			</Link>
			<Link className={styles.card} href='/6'>
				6
			</Link>
			<Link className={styles.card} href='/7'>
				7
			</Link>
			<Link className={styles.card} href='/8'>
				8
			</Link>
			<Link className={styles.card} href='/9'>
				9
			</Link>
		</main>
	);
}
