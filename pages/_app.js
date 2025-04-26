import '@/styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true, // Only animate once per element
      duration: 800, // Animation duration in ms
    });
  }, []);

  return <Component {...pageProps} />;
}