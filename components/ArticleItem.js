import Link from 'next/link';
import { getDateShort } from '../utils';

export default function ArticleItem({ slug, title, date }) {
  return (
    <Link href={slug}>
      <a>
        <div className="article-box">
          <h3>{title}</h3>
          <span>{getDateShort(date)}</span>
        </div>
      </a>
    </Link>
  );
}
