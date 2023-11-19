import styles from './page.module.css';

export default function About() {
	return (
		<section className={styles.container}>
			<div className={styles.title}>
				<h1>About Us</h1>
			</div>
			<div className={styles.text}>
				<p>
					In the lush valleys of the tranquil countryside, there existed a quaint little village, 
					enveloped by rolling hills dotted with wildflowers and towering oaks. The villagers led 
					a simple life, harmoniously intertwined with the rhythm of the seasons. As dawn stretched 
					its rosy fingers across the cobalt sky, a soft murmur of awakening would rise from the 
					cobblestone streets, greeting the new day with a symphony of clucking hens and the clatter 
					of wooden shutters being flung open. Each day was a fresh canvas, painted with the laughter 
					of children chasing fireflies and the wisdom of elders sharing tales under the ancient elm tree. 
					In this serene hamlet, every heart hummed with the joy of life's simple pleasures.
				</p>
			</div>
		</section>
	);
}
