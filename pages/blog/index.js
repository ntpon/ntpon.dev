import Layout from '../../components/Layout';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import ArticleHeader from '../../components/ArticleHeader';
import ArticleList from '../../components/ArticleList';
import { getPosts } from '../../lib/posts';
export default function BlogPage({ posts }) {
  return (
    <Layout title="Articles">
      <Hero
        title="บทความ"
        text="บันทึกการเรียนรู้ สรุปการเรียนและบทช่วยสอนทางทางด้านการเขียนโปรแกรม"
      />
      <Container>
        <ArticleHeader
          titlePrimary="บทความประจำปี 2565"
          titleSecondary="วันที่"
        />
        <ArticleList posts={posts} />
      </Container>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
}
