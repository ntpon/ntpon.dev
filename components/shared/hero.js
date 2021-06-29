import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}></div>
      <h1>Home. 😎</h1>
    </section>
  );
}

export default Hero;
