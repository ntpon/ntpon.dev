import Head from 'next/head';
import Hero from '../components/shared/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
export default function Home() {
  const posts = [
    {
      title: 'Mastering JavaScript - PART 2',
      excerpt:
        "JavaScript is the most important programming language for web development. You probably don't know it well enough!",
      date: '2021-10-30',
    },
    {
      title: 'Mastering JavaScript - PART 1',
      excerpt:
        "JavaScript is the most important programming language for web development. You probably don't know it well enough!",
      date: '2021-10-30',
    },
  ];
  return (
    <>
      <Head>
        <title>art0254</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}
