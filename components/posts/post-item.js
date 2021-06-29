import Link from 'next/link';
import Image from 'next/image';
import classes from './post-item.module.css';
function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.content}>
            <h3>{title}</h3>
            <p>{excerpt}</p>
            <time>{formattedDate}</time>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
