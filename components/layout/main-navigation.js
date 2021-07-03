import Link from 'next/link';
import Logo from './logo';
import Image from 'next/image';

import classes from './main-navigation.module.css';
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a className={classes.brand}>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <a
              href="https://github.com/art0254"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.png"
                alt="Github art0254"
                width={25}
                height={25}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
