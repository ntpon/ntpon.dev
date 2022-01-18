import Link from 'next/link';
import ArticleItem from './ArticleItem';

export default function ArticleList({ posts }) {
  return (
    <div className="article-container">
      {posts.map((post) => (
        <ArticleItem
          key={post.slug}
          slug={`/blog/${post.slug}`}
          title={post.content.title}
          date={post.content.date}
        />
      ))}
    </div>
  );
}
