import Head from 'next/head';
import Footer from './Footer';
import Hero from './Hero';
import Navigation from './Navigation';
export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <Head>
        <title>
          {title}
          {title !== 'NTPON' ? ' | NTPON' : ''}
        </title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/images/preview.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main>
        <Navigation />
        {children}
        <Footer />
      </main>
    </>
  );
}

Layout.defaultProps = {
  title: 'NTPON',
  keywords:
    'development, coding, programming, เขียนโปรแกรม, ฝึกเขียนโปรแกรม, สร้างเว็บ',
  description:
    'NTPON - เป็นเว็บไซต์บันทึกการเรียนรู้ทางการเขียนโปรแกรม แบ่งปันความรู้ในด้าน Coding',
};
