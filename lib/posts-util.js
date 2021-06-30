export function getFeaturedPosts() {
  const posts = [
    {
      title: 'Mastering JavaScript - PART 2',
      excerpt:
        "JavaScript is the most important programming language for web development. You probably don't know it well enough!",
      date: '2021-10-30',
      isFeatured: true,
    },
    {
      title: 'Mastering JavaScript - PART 1',
      excerpt:
        "JavaScript is the most important programming language for web development. You probably don't know it well enough!",
      date: '2021-10-30',
      isFeatured: true,
    },
  ];
  const featuredPosts = posts.filter((post) => post.isFeatured);
  return featuredPosts;
}
