import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function ArticleDetail({ post }) {
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className="image">
            <Image
              src={encodeURI(`/images/posts/${image.properties.src}`)}
              alt={image.alt}
              width={1000}
              height={500}
              layout="responsive"
              placeholder="blur"
              blurDataURL={encodeURI(`/images/posts/${image.properties.src}`)}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <article>
      <ReactMarkdown components={customRenderers}>{post}</ReactMarkdown>
    </article>
  );
}
