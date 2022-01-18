import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';

import * as gtag from '../lib/gtag';
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <NextNProgress color="#ffb038" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
