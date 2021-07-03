import Image from 'next/image';
import classes from './hero.module.css';

function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}></div>
      <h1>{props.title}</h1>
    </section>
  );
}

export default Hero;
