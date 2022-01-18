export default function ArticleHeader({ titlePrimary, titleSecondary }) {
  return (
    <div className="title-container">
      <h2 className="title">{titlePrimary}</h2>
      <h2>{titleSecondary}</h2>
    </div>
  );
}
