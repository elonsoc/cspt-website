import Image from 'next/image';
import style from './Hero.module.css';

export default function Hero() {
	return (
		<section className={style.container}>
			<div className={style.textBox}>
				<h1 className={style.title} data-text='Welcome to the Future...'>
					Welcome to the Future...
				</h1>
				<span></span>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
					quisquam odit voluptatem atque i usto! Soluta modi consectetur, magnam
					rem aut necessitatibus, voluptas sint, possimus excepturi optio vel
					consequatur eveniet laboriosam!
				</p>
			</div>
			<div className={style.banner1}>
				<Image src='/images/pic11.jpg' alt='banner1' sizes='100%' fill />
			</div>

			<div className={style.banner2}>
				<Image src='/images/pic6.jpg' alt='banner2' sizes='100%' fill />
			</div>

			<div className={style.banner3}>
				<Image src='/images/pic7.jpg' alt='banner3' sizes='100%' fill />
			</div>

			<div className={style.banner4}>
				<Image src='/images/pic10.jpg' alt='banner4' sizes='100%' fill />
			</div>
		</section>
	);
}
