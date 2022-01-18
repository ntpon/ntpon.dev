import Image from 'next/image';
import Link from 'next/link';
export default function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a className="brand">ntpon</a>
      </Link>
      <ul className="nav">
        <li>
          <Link href="/blog">
            <a className="nav-item">Articles</a>
          </Link>
        </li>
        {/* 
        <li>
          <Link href="/project">
            <a className="nav-item">Projects</a>
          </Link>
        </li> */}
        <li>
          <a
            className="nav-item"
            href="https://github.com/ntpon"
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
  );
}
