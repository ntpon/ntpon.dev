import Link from 'next/link';

export default function Readmore() {
  return (
    <div className="readmore">
      <Link href="/blog">
        <a className="btn btn-readmore">บทความทั้งหมด</a>
      </Link>
    </div>
  );
}
