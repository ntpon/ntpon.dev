import Layout from '../components/Layout';
import Container from '../components/Container';
import Hero from '../components/Hero';
import ArticleHeader from '../components/ArticleHeader';
import ArticleList from '../components/ArticleList';
import { getPosts } from '../lib/posts';
export default function HomePage({ posts }) {
  return (
    <Layout>
      <Hero title="Hello World 😎" />
      <Container>
        <ArticleHeader
          titlePrimary="บทความเด่นประจำปี 2565"
          titleSecondary="วันที่"
        />
        <ArticleList posts={posts} />
      </Container>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts().filter((post) => post.content.isShowHome);
  return {
    props: {
      posts,
    },
  };
}
