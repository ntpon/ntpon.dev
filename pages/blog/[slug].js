import ArticleDetail from '../../components/ArticleDetail';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout';
import Container from '../../components/Container';
import { getPost, getPosts } from '../../lib/posts';
import { getDateFull } from '../../utils';

export default function PostDetailPage({ post }) {
  return (
    <Layout title={post.data.title}>
      <Hero title={post.data.title} text={getDateFull(post.data.date)} />
      <Container>
        <ArticleDetail post={post.content} />
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const filePosts = getPosts();
  const paths = filePosts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = getPost(slug);
  return {
    props: {
      post,
      // slug,
    },
  };
}
